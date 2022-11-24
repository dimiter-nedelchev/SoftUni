function movieDestination (input) {

    let budget=Number(input[0])
    let destination=input[1]
    let season=input[2]
    let days=Number(input[3])

    let totalPrice=0

    if (season==="Winter") {
        if (destination==="Dubai") {
            totalPrice=days*45000
            totalPrice=totalPrice*0.7
        }
        else if (destination==="Sofia") {
            totalPrice=days*17000
            totalPrice=totalPrice*1.25
        }
        else {
            totalPrice=days*24000
        }
    }
    else if (season==="Summer") {
        if (destination==="Dubai") {
            totalPrice=days*40000
            totalPrice=totalPrice*0.7
        }
        else if (destination==="Sofia") {
            totalPrice=days*12500
            totalPrice=totalPrice*1.25
        }
        else {
            totalPrice=days*20250
        }
    }

    if (budget>=totalPrice) {
        console.log (`The budget for the movie is enough! We have ${(budget-totalPrice).toFixed(2)} leva left!`)
    }
    else {
        console.log (`The director needs ${(totalPrice-budget).toFixed(2)} leva more!`)
    }
}
//movieDestination (["400000","Sofia","Winter","20"])
//movieDestination (["1000000","Dubai","Summer","5"])
movieDestination (["200000","London","Summer","7"])
