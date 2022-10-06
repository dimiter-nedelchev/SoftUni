function godzillavsKong (input) {
    let budget=Number (input[0])
    let crewN=Number (input[1])
    let crewCl=Number (input[2])

    let decor=budget*0.1
    let clothesPr=crewN*crewCl

    if (crewN>150) {
        clothesPr=clothesPr - (clothesPr*0.1)
    }
    else {
        clothesPr==clothesPr
    }
    if ((clothesPr+decor)>budget) {
        console.log ("Not enough money!")
        console.log (`Wingard needs ${((clothesPr+decor)-budget).toFixed(2)} leva more.`)
    }
    else if ((clothesPr+decor)<=budget) {
        console.log ("Action!")
        console.log (`Wingard starts filming with ${(budget-(clothesPr+decor)).toFixed(2)} leva left.`)
    }

}
godzillavsKong (["9587.88", "0", "55.68"])