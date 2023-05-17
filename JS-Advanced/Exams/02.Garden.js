class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable= spaceAvailable,
        this.plants= [],
        this.storage= []
    }

    addPlant(plantName, spaceRequired) {
        if(spaceRequired > this.spaceAvailable){
            throw new Error ("Not enough space in the garden.");
        }

        let foundPlant= this.plants.find((p) => p.plantName == plantName);

        if(!foundPlant){
            this.plants.push({plantName, spaceRequired, ripe:false, quantity: 0});
            this.spaceAvailable-= spaceRequired;

            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        let foundPlant= this.plants.find((p) => p.plantName == plantName);

        if(!foundPlant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(foundPlant.ripe == true){
            throw new Error (`The ${plantName} is already ripe.`)
        }

        if(quantity <= 0){
            throw new Error (`The quantity cannot be zero or negative.`);
        }

        foundPlant.quantity+= quantity;
        foundPlant.ripe= true;

        if(quantity == 1){
            return `${quantity} ${plantName} has successfully ripened.`
        }
        else{
           return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let foundPlant= this.plants.find((p) => p.plantName == plantName);

        if(!foundPlant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if(!foundPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let index= this.plants.indexOf(foundPlant);
        this.spaceAvailable+= foundPlant.spaceRequired;
        this.plants.splice(index, 1);
        this.storage.push({plantName, quantity: foundPlant.quantity});

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let plantNames= []
        this.plants.sort((a,b) => (a.plantName).localeCompare(b.plantName)).forEach(plant => {
            plantNames.push(plant.plantName);
        });

        if(this.storage.length >= 1) {
           
        let sortedStorage= this.storage.map((p) => `${p.plantName} (${p.quantity})`);

           return [`The garden has ${ this.spaceAvailable } free space left.`, `Plants in the garden: ${plantNames.join(`, `)}`, `Plants in storage: ${sortedStorage.join(', ')}`].join('\n')
        }
        else{
            return [`The garden has ${ this.spaceAvailable } free space left.`, `Plants in the garden: ${plantNames.join(`, `)}`, `Plants in storage: The storage is empty.`].join('\n');
        }
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.generateReport());



