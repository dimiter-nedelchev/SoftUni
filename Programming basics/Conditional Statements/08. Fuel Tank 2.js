function fuelTank (input) {
    let fuelT=input [0]
    let fuelAm=Number (input[1])
    let discountC=input [2]
    let price=0
    let finalPr=0

    if (fuelT==="Gasoline" && discountC==="Yes") {
           price=fuelAm*(2.22-0.18)
    }
    else if (fuelT==="Gasoline" && discountC==="No") {
        price=fuelAm*2.22
    }
    if (fuelT==="Diesel" && discountC==="Yes") {
        price=fuelAm*(2.33-0.12)
    }
    else if (fuelT==="Diesel" && discountC==="No") {
        price=fuelAm*2.33
    }
    if (fuelT==="Gas" && discountC==="Yes") {
        price=fuelAm*(0.93-0.08)
    }
    else if (fuelT==="Gas" && discountC==="No"){
        price=fuelAm*0.93
    }
    if (fuelAm>=20 && fuelAm<=25) {
        finalPr=price - (price*0.08)
    }
    else if (fuelAm>25) {
        finalPr=price - (price*0.1)
    }
    else {
       finalPr=price
    }
    console.log (`${finalPr.toFixed(2)} lv.`)
    

}
//fuelTank (["Gas", "30", "Yes"])
//fuelTank (["Gasoline", "25", "No"])
fuelTank (["Diesel", "19", "No"])