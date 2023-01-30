function computerStore(input) {


    let index=0;
    let command=input[index++];
    let price=0;
    let totalPrice=0;
    let totalPriceWithoutTax=0
    let taxes=0;
  
    for(let i=0;i<=input.length-1;i++) {
        
        if(command==='special'){
            totalPrice*= 0.9;
            break;
        }
        else if(command==='regular') {
            break;
        }
        
        price=Number(command);
        
        if(price>0) {
        
        taxes+= price*0.2;
        totalPriceWithoutTax+= price;
        totalPrice= totalPriceWithoutTax + taxes;
        }
    else {
        console.log(`Invalid price!`)
        command=input[index++];
        continue;
        }
        command=input[index++]
    }

    if(totalPrice===0){
        console.log('Invalid order!');
    }
    else{
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
   
}
//computerStore(['1050','200','450','2','18.50','16.86','special']);
computerStore(['1023',  '15',  '-20','-5.50','450', '20', '17.66', '19.30', 'regular']);