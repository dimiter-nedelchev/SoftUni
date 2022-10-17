function match (input) {

    let budget=Number (input[0])
    let ticket=input [1]
    let fans=Number (input[2])

    let budgetL=0
    let ticketPr=0

    if (ticket==="Normal") { 
        ticketPr=fans*249.99
    }  
    else if (ticket==="VIP") {
        ticketPr=fans*499.99
    }
    if (fans>=1 && fans<=4) {
        budgetL=budget*0.25
    }
    else if (fans>=5 && fans<=9) {
        budgetL=budget*0.4
    }
    else if (fans>=10 && fans<=24) {
        budgetL=budget*0.5
    }
    else if (fans>=25 && fans<=49) {
        budgetL=budget*0.6
    }
    else {
        budgetL=budget*0.75
    }

    if (ticketPr<=budgetL) {
        console.log (`Yes! You have ${(budgetL-ticketPr).toFixed(2)} leva left.`)
    }
    else {
        console.log (`Not enough money! You need ${(ticketPr-budgetL).toFixed(2)} leva.`)
    }

}

match (["1000", "Normal", "1"])
match (["30000", "VIP", "49"])