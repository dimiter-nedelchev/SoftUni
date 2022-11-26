function agencyProfit (input) {

    let company=input [0]
    let adultTickets=Number(input[1])
    let childTickets=Number(input[2])
    let adultPr=Number(input[3])
    let fee=Number(input[4])

    let childPr=adultPr*0.3

    let adultPrFee=adultPr+fee
    let childPrFee=childPr+fee
    
    let adultTotal=(adultTickets*adultPrFee) 
    let childTotal=(childTickets*childPrFee)

    let profit=(adultTotal+childTotal)*0.2

    console.log(`The profit of your agency from ${company} tickets is ${profit.toFixed(2)} lv.`)




}
//agencyProfit (["WizzAir","15","5","120","40"])
agencyProfit (["Ryanair","60","23","158.96","39.12"])
