function autoEngineeringCompany(cars){

    let carCompany= new Map();

    cars.forEach(car => {
        const [brand, model, quantity]= car.split(' | ');

        if(!carCompany.has(brand)){
            carCompany.set(brand, new Map());
        }

        let carModel= carCompany.get(brand);
        if(!carModel.has(model)){
            carModel.set(model, 0);
        }
        carModel.set(model, carModel.get(model) + Number(quantity));
    });

    for(let brand of carCompany.keys()){
        console.log(brand);
        let models= carCompany.get(brand);
        for(let model of models.keys()){
            console.log(`###${model} -> ${models.get(model)}`)
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10']);