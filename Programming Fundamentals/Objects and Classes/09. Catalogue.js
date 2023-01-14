function catalogue(input){

    let catalogue= [];
    
    input.forEach(product => {
        const [name, quantity] = product.split(' : ');
        const item = {
            name,
            quantity,
        }
        catalogue.push(item)
    })

    catalogue.sort((a,b) => (a.name).localeCompare(b.name))
    const length= catalogue.length-1
    for(let i=0;i<=length;i++ ) {

        if(i === 0) {
            console.log(catalogue[0].name[0])
            console.log(`  ${catalogue[i].name}: ${catalogue[i].quantity}`)
        }
        else if (i<length){
         if(catalogue[i].name[0] === catalogue[i+1].name[0]) {
            console.log(`  ${catalogue[i].name}: ${catalogue[i].quantity}`)
        }
        else if (catalogue[i].name[0] !== catalogue[i+1].name[0]){
            console.log(`  ${catalogue[i].name}: ${catalogue[i].quantity}`)
            console.log(`${catalogue[i+1].name[0]}`)
        }
    }
    else{
        console.log(`  ${catalogue[i].name}: ${catalogue[i].quantity}`)
    }
    }
}
catalogue([

'Appricot : 20.4',

'Fridge : 1500',

'TV : 1499',

'Deodorant : 10',

'Boiler : 300',

'Apple : 1.25',

'Anti-Bug Spray : 15',

'T-Shirt : 10'

]);