function orders(product,quantity){

    getPrice(product,quantity);

    function getPrice(product,quantity){
        let price=0;

        if(product==='coffee'){
            price=1.50*quantity;
        }
        else if(product==='water'){
            price=1*quantity;
        }
        else if(product==='coke'){
            price=1.4*quantity;
        }
        else{
            price=2*quantity;
        }
        return price.toFixed(2);
    }

    console.log(getPrice(product,quantity))
}
orders("water", 5)