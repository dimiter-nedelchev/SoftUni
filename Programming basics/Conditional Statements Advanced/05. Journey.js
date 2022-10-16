function journey (input) {

    let budget=Number (input[0])
    let season=input [1]

    let price=0
    let accomodation=""
    let destination=""

    if (budget<=100) {if (season==="summer") { 
        price=budget*0.3
        accomodation="Camp"
        destination="Bulgaria"
    }
    else if (season==="winter") {
        price=budget*0.7
        accomodation="Hotel"
        destination="Bulgaria"
    }
    console.log (`Somewhere in ${destination}`)
    console.log (`${accomodation} - ${price.toFixed(2)}`)
    }

    else if (budget>100 && budget<=1000) {if (season==="summer") {
    price=budget*0.4
    accomodation="Camp"
    destination="Balkans"
    }
    else if (season==="winter") {
        price=budget*0.8
        accomodation="Hotel"
        destination="Balkans"
    }
    console.log (`Somewhere in ${destination}`)
    console.log (`${accomodation} - ${price.toFixed(2)}`)
}
else if (budget>1000) {if (season==="summer") {
    price=budget*0.9
    accomodation="Hotel"
    destination="Europe"
}
else if (season==="winter") {
    price=budget*0.9
    accomodation="Hotel"
    destination="Europe"
}
    console.log (`Somewhere in ${destination}`)
    console.log (`${accomodation} - ${price.toFixed(2)}`)
}
}
journey (["50", "summer"])
journey (["75", "winter"])
journey (["312", "summer"])
journey (["678.53", "winter"])
journey (["1500", "summer"])



