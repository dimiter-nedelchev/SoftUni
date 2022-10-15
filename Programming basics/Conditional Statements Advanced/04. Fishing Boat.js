function fishingBoat (input) {

    let budget=Number (input[0])
    let season=input [1]
    let fishermen=Number (input[2])

    let rent=0

    if (season==="Spring") {if (fishermen<=6) {
        rent=3000*0.9
    }
    else if (fishermen>6 && fishermen<=11) {
        rent=3000*0.85
    }
    else if (fishermen>11) {
        rent=3000*0.75
    } 
    if (fishermen%2==0) {
        rent=rent*0.95
    }
    else {
        rent=rent
    }
    }
    if (season==="Summer" || season==="Autumn") {if (fishermen<=6) {
        rent=4200*0.9
    }
    else if (fishermen>6 && fishermen<=11) {
        rent=4200*0.85
    }
    else if (fishermen>11) {
        rent=4200*0.75
    }
    if (season==="Summer" && fishermen%2==0) {
        rent=rent*0.95
    }
    else {
        rent=rent
    }
    }
    if (season==="Winter") {if (fishermen<=6) {
        rent=2600*0.9
    }
    else if (fishermen>6 && fishermen<=11) {
        rent=2600*0.85
    }
    else if (fishermen>11) {
        rent=2600*0.75
    }
    if (fishermen%2==0) {
        rent=rent*0.95
    }
    }
    if (budget>=rent) {
        console.log (`Yes! You have ${(budget-rent).toFixed(2)} leva left.`)
    }
    else {
        console.log (`Not enough money! You need ${(rent-budget).toFixed(2)} leva.`)
    }
}
fishingBoat (["3000","Summer","11"])
fishingBoat (["3600","Autumn","6"])
fishingBoat (["2000","Winter","13"])

