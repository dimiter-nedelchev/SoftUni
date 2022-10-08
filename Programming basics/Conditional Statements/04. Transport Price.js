function transport (input) {
    let km=Number (input[0])
    let time=input [1]

    if (km<20 && time==="day") {
        let price=0.70 + (0.79*km)
        console.log(`${price.toFixed(2)}`)
    }
    else if (km<20 && time==="night") {
        let price=0.70 + (0.90*km)
        console.log(`${price.toFixed(2)}`)
    }
    else if (km>=20 && km<100) {
        let price=0.09*km
        console.log(`${price.toFixed(2)}`)
    }
    else if (km>=100) {
        let price=0.06*km
        console.log(`${price.toFixed(2)}`)
    }
    
}
//transport (["5", "day"])
//transport (["7", "night"])
//transport (["25", "day"])
transport (["180", "night"])