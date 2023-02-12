function destinationMapper(string){

    const pattern= /([=\/])(?<destination>[A-Z][A-Za-z][A-Za-z]+)\1/g
    let travelPoints= 0;
    let destinations=[]

    while(matches){
        travelPoints+= (matches.groups['destination']).length;
        destinations.push(matches.groups['destination']);
        matches= pattern.exec(string);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`)
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")