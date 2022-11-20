function easterLunch (input) {

    let sweetBreadAm=Number (input[0])
    let eggsAm=Number (input[1])
    let cookiesAm=Number (input[2])
    let dye=0.15

    let sweetBreadPr=sweetBreadAm*3.2
    let eggsPr=eggsAm*4.35
    let cookiesPr=cookiesAm*5.4
    let dyePr=(eggsAm*12)*0.15

    let total=sweetBreadPr + eggsPr + cookiesPr + dyePr

    console.log (total.toFixed(2))
}
//easterLunch (["3","2","3"])	
easterLunch (["4","4","3"])

