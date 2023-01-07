function storeProvision(availableItems, newItems){

    let itemLength= availableItems.length - 1;
    let newItemLength= newItems.length - 1;
    let items= {}

    for(let i=0;i<=itemLength;i+= 2){
        const currentProduct= availableItems[i]
        const quantity= Number(availableItems[i+1])

        items[currentProduct]= quantity
    }
    
    for(let j=0;j<=newItemLength;j+=2){
        const newProduct= newItems[j]

        if(!items.hasOwnProperty(newProduct)){
            items[newProduct]= Number(newItems[j+1])
        }
        else{
        items[newProduct]+= Number(newItems[j+1])
        }
    }

    for(const key in items){
        console.log(`${key} -> ${items[key]}`)
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
//storeProvision(['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);