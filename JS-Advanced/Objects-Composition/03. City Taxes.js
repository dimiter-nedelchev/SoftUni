function solve(name, population, treasury){

    const city= {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes () {
           this.treasury+= this.population*this.taxRate;
        },
        applyGrowth (percentage) {
            percentage /= 100
            this.population*=  1 + percentage;
        },
        applyRecession (percentage) {
            percentage /= 100
            this.treasury*= 1 - percentage;
        }
    }
    
    return city;
}
solve('Tortuga', 7000, 15000);