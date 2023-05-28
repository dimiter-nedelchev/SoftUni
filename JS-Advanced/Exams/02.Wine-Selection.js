class WineSelection {
    constructor(space) {
        this.space= space;
        this.wines= [];
        this.bill= 0;
    }
    reserveABottle (wineName, wineType, price) {
        if(this.space < 1) {
            throw new Error ("Not enough space in the cellar.");
        }

        this.wines.push({wineName, wineType, price, paid: false});
        this.space--
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ) {
        let wineFound= this.wines.find((w) => w.wineName == wineName);

        if(!wineFound) {
            throw new Error (`${wineName} is not in the cellar.`)
        }

        if(wineFound.paid == true){
            throw new Error(`${wineName} has already been paid.`)
        }

        wineFound.paid= true;
        this.bill+= wineFound.price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        let wineFound= this.wines.find((w) => w.wineName == wineName);

        if(!wineFound) {
            throw new Error("The wine, you're looking for, is not found.")
        }

        if(wineFound.paid == false){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        let wineIndex= this.wines.indexOf(wineFound);
        this.wines.splice(wineIndex, 1);
        this.space++ 
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        
        if(!wineType){
            let message= [`You have space for ${ this.space } bottles more.`, `You paid ${this.bill}$ for the wine.`]
            let sortedWines= this.wines.sort((a,b) => (a.wineName).localeCompare(b.wineName)).map((wine) => {
                if(wine.paid){
                    return `${wine.wineName} > ${wine.wineType} - Has Paid.`
                }
                else{
                    return `${wine.wineName} > ${wine.wineType} - Not Paid.`
                }
            })
            return `${message.join('\n')}\n${sortedWines.join('\n')}`
        }

        let wineFound= this.wines.some((w) => w.wineType == wineType);

        if(!wineFound){
            throw new Error(`There is no ${wineType} in the cellar.`)
        }
        else{
            let foundWines= this.wines.filter((w) => w.wineType == wineType).map((wine) => {
                if(wine.paid){
                   return `${wine.wineName} > ${wine.wineType} - Has Paid.`
                }
                else{
                   return `${wine.wineName} > ${wine.wineType} - Not Paid.`
                }
            });
           return foundWines.join()
        }
    }
}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Rose', 120);
console.log(selection.cellarRevision());

