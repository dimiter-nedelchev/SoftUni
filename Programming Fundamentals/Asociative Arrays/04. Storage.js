function storage(input){

    let groceries= {}

    input.forEach(product => {
        const [productName, quantity] = product.split(' ');

        if(groceries[productName]){
            groceries[productName] += Number(quantity)
        }
        else{
            groceries[productName]= Number(quantity)
        }
    })

    for(const product in groceries){
        console.log(`${product} -> ${groceries[product]}`)
    }
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);
storage(['apple 50',

'apple 61',

'coffee 115',

'coffee 40']);