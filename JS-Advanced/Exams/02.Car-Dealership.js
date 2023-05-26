class CarDealership {
    constructor(name) {
        this.name= name,
        this.availableCars= [],
        this.soldCars= [],
        this.totalIncome= 0
    }
    addCar (model, horsepower, price, mileage) {
        if(model === '' || horsepower < 0 || price < 0 || mileage < 0){
            throw new Error('Invalid input!')
        }
        this.availableCars.push({model, horsepower, price, mileage})
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar (model, desiredMileage) {
        let desiredCar= this.availableCars.find((c) => c.model == model);

        if(!desiredCar){
            return `${model} was not found!`
        }

        let horsepower= desiredCar.horsepower;

        if(desiredCar.mileage <= desiredMileage){
            let soldCarIndex= this.availableCars.indexOf(desiredCar);
            let soldPrice= desiredCar.price;
            this.totalIncome+= soldPrice;
            this.soldCars.push({model, horsepower, soldPrice})
            
            this.availableCars.splice(soldCarIndex, 1);
            return `${model} was sold for ${soldPrice.toFixed(2)}$`
        }
        else if((desiredCar.mileage - desiredMileage) <= 40000){
            let soldPrice= desiredCar.price*0.95
            let soldCarIndex= this.availableCars.indexOf(desiredCar);
            this.totalIncome+= soldPrice;
            this.soldCars.push({model, horsepower, soldPrice})

            this.availableCars.splice(soldCarIndex, 1);
            return `${model} was sold for ${soldPrice.toFixed(2)}$`
        }
        else if((desiredCar.mileage - desiredMileage) > 40000){
            let soldPrice= desiredCar.price*0.9
            let soldCarIndex= this.availableCars.indexOf(desiredCar);
            this.totalIncome+= soldPrice;
            this.soldCars.push({model, horsepower, soldPrice})

            this.availableCars.splice(soldCarIndex, 1);
            return `${model} was sold for ${soldPrice.toFixed(2)}$`
        }
    }

    currentCar () {

        if(this.availableCars.length > 0) {
            let cars= ["-Available cars:"];
            this.availableCars.map((car) => cars.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`));
    
            return cars.join('\n');
        }
        else{
            return `There are no available cars`
        }
       
    }

    salesReport (criteria) {
        
        let finalReport= [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,`-${this.soldCars.length} cars sold:`]

        if(criteria !== 'horsepower' && criteria !== 'model'){
            throw new Error ('Invalid criteria!')
        }
        

        if(criteria == 'horsepower'){
            let sortedCars= this.soldCars.sort((a,b) => (b.horsepower) - (a.horsepower)).map((c) => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
            return `${finalReport.join('\n')}\n${sortedCars.join('\n')}`

        }
        else if (criteria == 'model'){
            let sortedCars= this.soldCars.sort((a,b) => (a.model).localeCompare(b.model)).map((c) => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
            return `${finalReport.join('\n')}\n${sortedCars.join('\n')}`
        }
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
console.log(dealership.currentCar())


