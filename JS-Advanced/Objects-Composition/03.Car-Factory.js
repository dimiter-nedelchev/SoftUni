function carFactory(model){

    let car= {};
    car.model= model.model;

    if(model.power <= 90){
       car.engine= {power: 90, volume: 1800}
    }
    else if(model.power <= 120){
        car.engine= {power: 120, volume: 2400}
    }
    else{
        car.engine= {power: 200, volume: 3500}
    }

    if(model.carriage == 'hatchback'){
        car.carriage= {type: 'hatchback', color: model.color}
    }   
    else{
        car.carriage= {type: 'coupe', color: model.color}
    }

    if(model.wheelsize % 2 == 0){
        car.wheels= [];
        let size= model.wheelsize - 1;

        car.wheels.push(size, size, size, size);
    }
    else{
        car.wheels= [];
        let size= model.wheelsize
        car.wheels.push(size, size, size, size);
    }

    return car
}
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

)