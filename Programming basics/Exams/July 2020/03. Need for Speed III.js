function needForSpeed(input){

    let index= 0;
    command= '';
    const carCount= Number(input.shift());
    let cars= {};

    for (let i=1; i <= carCount; i++){
        let [make, mileage, fuel]= input.shift().split('|');

        mileage= Number(mileage);
        fuel= Number(fuel);

        cars[make]= {
            mileage,
            fuel,
        }
    }

    while(command !== 'Stop'){
        command= input[index++];

        if(command.includes('Drive')){
            let [currComm, make, neededMileage, neededFuel]= command.split(' : ');
            
            neededMileage= Number(neededMileage);
            neededFuel= Number(neededFuel);

            if (neededFuel <= cars[make].fuel){
                cars[make].mileage+= neededMileage;
                cars[make].fuel-= neededFuel;
                console.log(`${make} driven for ${neededMileage} kilometers. ${neededFuel} liters of fuel consumed.`)
            }
            else {
                console.log('Not enough fuel to make that ride')
            }
            if(cars[make].mileage >= 100000){
                console.log(`Time to sell the ${make}!`)
                delete cars[make];
            }
        }
        else if(command.includes('Refuel')){
            let [currComm, make, refuelAm]= command.split(' : ');
            refuelAm= Number(refuelAm);
            let refueled= 0;

            cars[make].fuel+= refuelAm;

            if(cars[make].fuel > 75){
                let excessFuel= cars[make].fuel - 75; 
                 refueled= refuelAm - excessFuel;
                 cars[make].fuel= 75;
            }
            else {
                refueled= refuelAm;
            }
            console.log(`${make} refueled with ${refueled} liters`)
        }
        else if(command.includes('Revert')){
            let [currComm, make, revertedMileage]= command.split(' : ');
            revertedMileage= Number(revertedMileage);

            cars[make].mileage-= revertedMileage;

            if(cars[make].mileage <= 10000){
                cars[make].mileage= 10000
            }
            else{
                console.log(`${make} mileage decreased by ${revertedMileage} kilometers`)
            }
        }
    }

    for (const car in cars){
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`)
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  );