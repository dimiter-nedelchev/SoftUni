function garage(input){

    let garages= {}

    input.forEach(car => {
        let [garageNumber, carInfo]= car.split(' - ');
        garageNumber= Number(garageNumber);
       let carInfoIndex= carInfo.indexOf(':');

       while(carInfoIndex >= 0){
        carInfo= carInfo.replace(':', ' -');
        carInfoIndex= carInfo.indexOf(':', carInfoIndex)
       }

        if(!garages.hasOwnProperty(garageNumber)){
            garages[garageNumber]= [];
        }
        garages[garageNumber].push(carInfo)
    })

    for(let garage in garages){
        console.log(`Garage № ${garage}`)
        
        for(let car of garages[garage]){
            console.log(`--- ${car}`)
        }
    }
}
garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
)