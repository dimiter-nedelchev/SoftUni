function rentalCar (input) {

    let budget=Number (input[0])
    let season=input [1]

    let carPr=0
    let type=''
    let clas=''

    if (budget<=100) {
        clas="Economy class" 
        if (season==="Summer") {
            type="Cabrio"
            carPr=budget*0.35
        }
        else if (season==="Winter") {
            type="Jeep"
            carPr=budget*0.65
        }
    }
    else if (budget>100 && budget<=500) {
        clas="Compact class"
        if (season==="Summer") {
            type="Cabrio"
            carPr=budget*0.45
        }
        else if (season==="Winter") {
            type="Jeep"
            carPr=budget*0.80
        }
    }
    else {
        clas="Luxury class"
        if (season==="Summer"|| season==="Winter") {
            type="Jeep"
            carPr=budget*0.9
        }
    }
    console.log (clas)
    console.log (`${type} - ${(carPr).toFixed(2)}`)
}
rentalCar (["450", "Summer"])
rentalCar (["450", "Winter"])
rentalCar (["1010", "Summer"])
rentalCar (["99.99", "Summer"])
rentalCar (["1010", "Winter"])
rentalCar (["70.50", "Winter"])