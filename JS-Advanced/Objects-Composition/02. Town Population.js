function solve(input){

    let registry= {};

    input.forEach(city => {
        let [name, population]= city.split(' <-> ');
        population= Number(population)

        if(!registry.hasOwnProperty(name)){
            registry[name]= population
        }
       else{
        registry[name]+= population;
       }
    })

    for(let city in registry){
        console.log(`${city} : ${registry[city]}`);
    }
}
solve(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000']);