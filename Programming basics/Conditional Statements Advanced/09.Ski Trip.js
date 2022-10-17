function skiTrip (input) {

    let days=Number (input[0])
    let type=input [1]
    let eval=input [2]
    
    let night=days-1
    let price=0
    
    
    if (type==="room for one person") {
        if (days<10 || days>=10 && days <=15 || days>15) {
            price=night*18.00
        }
        if (eval==="positive") {
            price=price+(price*0.25)
        }
        else {
            price=price-(price*0.1)
        }
        console.log(price.toFixed(2))
    }
    
    else if (type==="apartment") {
        if (days<10){
            price=(night*25) - ((night*25)*0.3)
        }
        else if (days>=10 && days<=15) {
            price= (night*25) - ((night*25)*0.35)
        }
        else if (days>15) {
            price= (night*25) - ((night*25)*0.5)
        }
        if (eval==="positive") {
            price=price+(price*0.25)
        }
        else {
            price=price-(price*0.1)
        }
        console.log (price.toFixed(2))
    }
    
    else if (type==="president apartment") {
        if(days<10) {
            price=(night*35) - ((night*35)*0.1)
        }
        else if (days>=10 && days<=15) {
            price=(night*35) - ((night*35)*0.15)
        }
        else if (days>15) {
            price=(night*35) - ((night*35)*0.2)
        }
        if (eval==="positive") {
            price=price+(price*0.25)
        }
        else {
            price=price-(price*0.1)
        }
        console.log (price.toFixed(2))
    }
    }
    skiTrip (["11", "apartment", "positive"])