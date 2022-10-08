function petFood (input) {
    let time=Number(input[0])
    let totalFood=Number (input[1])
    let dogFood=Number (input[2])
    let catFood=Number (input[3])
    let turtleFood=Number (input[4])

    let turtleFoodKg=turtleFood/1000

    let foodEaten=(turtleFoodKg + dogFood +catFood)*time

    if (totalFood>=foodEaten) {
        console.log (`${Math.floor(totalFood-foodEaten)} kilos of food left.`)
    }
    else {
        console.log (`${Math.ceil(foodEaten-totalFood)} more kilos of food are needed.`)
    }

}
//petFood (["2", "10", "1", "1", "1200"])
petFood (["5", "10", "2.1", "0.8", "321"])