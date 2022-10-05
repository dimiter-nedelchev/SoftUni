function toyShop (input) {
let vacation=Number (input[0])

let puzzle=Number (input [1])
let doll=Number (input[2])
let bear=Number (input[3])
let minion=Number (input[4])
let truck=Number (input[5])

let puzzlePr=2.60
let dollPr=3
let bearPr=4.10
let minionPr=8.20
let truckPr=2

let totalPrice= (puzzle*puzzlePr) + (doll*dollPr) + (bear*bearPr) + (minion*minionPr) +(truck*truckPr)
let toyNumber=(puzzle) + (doll) + (bear) + (minion) + (truck)

if (toyNumber>=50) {
totalPrice=totalPrice - (totalPrice*0.25)
}
else  {
    totalPrice==totalPrice
}

let finalPrice=totalPrice - (totalPrice*0.10)

if (finalPrice>=vacation) {
    console.log (`Yes! ${(finalPrice-vacation).toFixed (2)} lv left.`)
}
else if (finalPrice<=vacation) {
console.log (`Not enough money! ${Math.abs(finalPrice-vacation).toFixed (2)} lv needed.`)
}
}
toyShop (["700", "2", "2", "3", "5", "1"])