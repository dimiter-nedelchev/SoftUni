function armies(input){

    let armies= {};

    input.forEach(command => {

        if(command.includes('arrives')){
            const leader= command.split(' arrives').join('');
            armies[leader]= {
                total: 0,
            };
        }
        else if(command.includes(':')){
            let [leader,army]= command.split(': ');
            let [armyName, armyNumber]= army.split(', ');
            armyNumber= Number(armyNumber);

            if(armies.hasOwnProperty(leader)){
                armies[leader][armyName]= armyNumber;
                armies[leader].total+= armyNumber;
            }
        }
        else if(command.includes('defeated')){
            const leader= command.split(' defeated').join('');
            delete armies[leader];
        }
        else if(command.includes('+')){
            let [armyName, number]= command.split(' + ');
            number= Number(number);

            for(let leader in armies){
                if(armies[leader].hasOwnProperty(armyName)){
                    armies[leader][armyName]+= number;
                    armies[leader].total+= number;
                }
            }
        }
    })

    let sorted= Object.entries(armies);
    sorted= sorted.sort((a,b) => (b[1].total) - (a[1].total));

    for(let i= 0; i <= sorted.length -1; i++){
        console.log(`${sorted[i][0]}: ${sorted[i][1].total}`)
        
        let sortedArmies= Object.entries(sorted[i][1]).sort((a, b) => (b[1]) - (a[1]));
        sortedArmies.shift();

        for(let j= 0; j <= sortedArmies.length - 1; j++){
            console.log(`>>> ${sortedArmies[j][0]} - ${sortedArmies[j][1]}`)
        }
    }
}
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);