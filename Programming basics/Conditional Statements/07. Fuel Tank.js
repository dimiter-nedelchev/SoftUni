function fuelT (input) {
    let fuelType=input [0]
    let fuelAmount=Number (input[1])

    if (fuelAmount>=25)  { if (fuelType==="Gasoline" || fuelType==="Diesel" || fuelType==="Gas") {
        console.log (`You have enough ${(fuelType).toLowerCase (1)}.`)
    }
        else if (fuelType !="Gasoline" || fuelType !="Gas" || fuelType!="Diesel") {
            console.log ("Invalid fuel!")
        }
    }
    else if (fuelAmount<25) { if (fuelType==="Gasoline" || fuelType==="Diesel" || fuelType==="Gas"){
        console.log (`Fill your tank with ${(fuelType).toLowerCase(1)}!`)
    }
    else if (fuelType !="Gas" || fuelType !="Gasoline" || fuelType !="Diesel") {
        console.log (`Invalid fuel!`)
    }

}
}
//fuelT (["Diesel", "10"])
//fuelT(["Gasoline", "40"])
//fuelT (["Gas", "25"])
fuelT (["Kerosene", "200"])