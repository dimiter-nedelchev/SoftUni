function furniture(input){

    let furniture= [];
    let totalPrice= 0;
    let line= ''
    
    const pattern= /[>]{2}(?<furniture>[A-Z][A-Za-z\s]+)[<]{2}(?<price>[0-9.]+\d+)\!(?<quantity>\d+)/g
    input.forEach(el => {
        line+= `${el} `;
    })

    let currentFurniture= pattern.exec(line)
        
    while(currentFurniture){
            furniture.push(currentFurniture.groups['furniture']);
            totalPrice+= (Number(currentFurniture.groups['price']) * Number(currentFurniture.groups['quantity']))

            currentFurniture= pattern.exec(line);
    }

    console.log('Bought furniture:')
    for(const piece of furniture){
        console.log(piece)
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5.5',

'>Invalid<<!5',

'>>Chair<<100!2',

'Purchase'])