function softUniBar(input){

    const customerPattern= /%(?<customer>[A-Z][a-z]+)%/g
    const productPattern= /<(?<product>\w+)>/g
    const quantityPattern= /\|(?<quantity>\d+)\|/g
    const pricePattern= /(?<price>[0-9.]+\d+)\$/g

    const length= input.length - 1;
    let finalPrice= 0;
    let totalPrice= 0;

    for(let i= 0; i <= length; i++){

        let customerCheck= input[i].match(customerPattern);

        if(customerCheck){

            let productCheck= input[i].match(productPattern);
            
            if(productCheck){

                let quantityCheck= input[i].match(quantityPattern);
                
                if(quantityCheck){

                    let priceCheck= input[i].match(pricePattern);

                    if(priceCheck){

                        let price= Number((pricePattern.exec(input[i])).groups['price'])
                        let quantity= Number((quantityPattern.exec(input[i])).groups['quantity'])
                        let customer= (customerPattern.exec(input[i])).groups['customer']
                        let product= (productPattern.exec(input[i])).groups['product']

                        totalPrice= price*quantity
                        console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`)
                        finalPrice+= totalPrice;
                    }
                }
            }
        }
    }
    console.log(`Total income: ${finalPrice.toFixed(2)}`)
}
softUniBar(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift']);