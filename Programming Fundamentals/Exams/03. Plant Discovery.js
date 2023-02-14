function plantDiscovery(input){

    const plantCount= Number(input.shift()) - 1;
    let index= 0;
    let plants= {}

    for( let i = 0; i <= plantCount; i++){
        let [plantName, rarity]= input.shift().split('<->');
        rarity= Number(rarity)

        plants[plantName]= {
            rarity,
            rating: 0,
            count: 0
}
}
    let command= input[index++];

    while(command !== 'Exhibition'){

        if(command.includes('Rate')){
            ratePlant(command, plants);
        }
        else if (command.includes('Update')){
            updatePlant(command, plants);
        }
        else if(command.includes('Reset')){
            resetRatings(command, plants);
        }

        command= input[index++]
    }

    function ratePlant(command, plants){
        command= command.split(': ');
        let [plant, rating]= command[1].split(' - ');

        if(plants.hasOwnProperty(plant)){
            plants[plant].rating+= Number(rating);
            plants[plant].count+= 1;
        }
        else{
            console.log('error');
        }
        return plants;
    }

    function updatePlant(command){
         command= command.split(': ');
        let [plant, newRarity]= command[1].split(' - ');

        if(plants.hasOwnProperty(plant)){
            plants[plant].rarity= Number(newRarity);
        }
        else{
            console.log('error');
        }
        return plants;
    }

    function resetRatings(command){
        const [currCommand, plant]= command.split(': ');

        if(plants.hasOwnProperty(plant)){
            plants[plant].rating= 0;
            plants[plant].count= 0;
        }
        else{
            console.log('error');
        }
        return plants;
    }

    for(let currPlant in plants){
        if(plants[currPlant].rating > 0){
            plants[currPlant].rating= (plants[currPlant].rating / plants[currPlant].count).toFixed(2)
        }
        else{
            plants[currPlant].rating= (plants[currPlant].rating).toFixed(2)
        }
    }

   console.log('Plants for the exhibition:')
    for(const plant in plants){
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${plants[plant].rating}`)
    }
}

plantDiscovery((["4",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Welwitschia<->4",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
)