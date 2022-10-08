function wine (input) {
let vineyard=Number (input[0])
let grapesPsqM=Number (input[1])
let wineNeeded=Number (input[2])
let workers=Number (input[3])

let sqmWine=vineyard-(vineyard*0.6)
let grapes=sqmWine*grapesPsqM
let wine=grapes/2.5

let wineLeft=wine-wineNeeded

if (wine<wineNeeded) {
    console.log (`It will be a tough winter! More ${Math.floor(wineNeeded-wine)} liters wine needed.`)
}
else if (wine>=wineNeeded) {
    console.log (`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`)
    console.log (`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineLeft/workers)} liters per person.`)
}

}
//wine (["650","2","175","3"])
wine (["1020", "1.5", "425", "4"])