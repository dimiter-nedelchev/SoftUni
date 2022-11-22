function safari (input) {

    let budget=Number (input[0])
    let fuel=Number (input[1])
    let day=input [2]

    let fuelPr=fuel*2.1
    let price=0

    if (day==="Saturday") {
        price=(fuelPr+100)*(0.9)
    }
    else if (day==="Sunday") {
        price=(fuelPr+100)*(0.8)
    }
    if (budget>=price) {
        console.log (`Safari time! Money left: ${(budget-price).toFixed(2)} lv. `)
    }
    else {
        console.log (`Not enough money! Money needed: ${(price-budget).toFixed(2)} lv.`)
    }
}
safari (["1000","10","Sunday"])
safari (["120","30","Saturday"])