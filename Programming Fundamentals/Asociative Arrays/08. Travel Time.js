function travelTime(input){

    let countries= [];
    let currentCountry= {};
    let isFound= false;
    input.forEach(country => {
        const [name, town, cost]= country.split(' > ');

        for(let i=0;i<=countries.length-1;i++) {
            if(countries[i].name === name){
                if(countries[i].hasOwnProperty(town)){
                    if(countries[i][town] > cost){
                        countries[i][town]= cost
                    }
                }
                else{
                    countries[i][town]= cost
                }
                isFound=true;
    }
    }
    if(!countries.length || isFound === false){
        currentCountry= {
            name,
            [town]: Number(cost),
        }
    countries.push(currentCountry)
    }
    isFound= false;
    })

    countries.sort((a,b) => (a.name).localeCompare(b.name))

    for(let i=0;i<=countries.length-1;i++){
        let countryArr= Object.entries(countries[i])
        countryArr.sort((a,b) => a[1] - b[1])
        countries[i]= Object.fromEntries(countryArr)
    }

    for(let j=0;j<=countries.length-1;j++){
        let el= Object.values(countries[j])[0]
        let countryName= Object.keys(countries[j])[0]
    for(const [key, value] of Object.entries(countries[j])){
        if(countries[j][key] !== el){
            countries[j][countryName]+= `${key} -> ${value} `
        }
        else{
            countries[j][countryName]+= ` -> `
        }
    }
}
for(const country of countries){
    console.log(`${country.name}`)
}
}
travelTime([

    'Bulgaria > Sofia > 25000',
    
    'Bulgaria > Sofia > 25000',
    
    'Kalimdor > Orgrimar > 25000',
    
    'Albania > Tirana > 25000',
    
    'Bulgaria > Varna > 25010',
    
    'Bulgaria > Lukovit > 10'
    
    ]);