function sum (input) {
    index=0
    let balance=0
    let deposit=''
   
    

    while (deposit!="NoMoreMoney") {
        deposit=input [index++]
        let amount=Number (deposit)
       if (deposit==="NoMoreMoney") {
        break;
       }
       if (amount<0) {
        console.log ("Invalid operation!")
       }
       else {
        console.log (`Increase: ${amount.toFixed(2)}`)
        balance+= amount
       }
    }
    console.log (`Total: ${balance.toFixed(2)}`)
}
//sum (["40", "60", "50", "NoMoreMoney"])
sum (["120","45.55", "-150"])
