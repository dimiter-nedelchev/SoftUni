function piccolo(input){

    let parking= {};
    
    input.forEach(car => {
        const [direction, number]= car.split(', ');

        if(direction === 'IN'){
            parking[number]= number;
        }
        else{
            delete parking[number];
        }
    })

    let cars= Object.entries(parking)
    cars.sort((a,b) => (a[0]).localeCompare(b[0]))

    
    if(!cars.length){
        console.log(`Parking Lot is Empty`)
    }
    else{
        for(const car of cars){
        console.log(`${car[0]}`)
    }
}

}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);