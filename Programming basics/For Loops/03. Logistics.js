function logistics (input) {

    let cargoN=Number (input.shift())
    let tonPr=0
    let vehicle=''
    let averagePr=0
    let totalW=0

    let microbusC=0
    let truckC=0
    let trainC=0
    
    for (i=1;i<=cargoN;i++) {
       let cargoW= Number (input.shift ())
       if (cargoW<=3) {
        vehicle="microbus"
        tonPr+= 200*cargoW
        microbusC+= cargoW
       }
       else if (cargoW>=4 && cargoW<=11) {
        vehicle="truck"
        tonPr+= 175*cargoW
        truckC+= cargoW
       }
       else {
        vehicle="train"
        tonPr+= 120*cargoW
        trainC+= cargoW
       }
       totalW+= cargoW
       averagePr= tonPr/totalW
    }
    console.log (averagePr.toFixed(2))
    console.log (`${((microbusC/totalW)*100).toFixed(2)}%`)
    console.log (`${((truckC/totalW)*100).toFixed(2)}%`)
    console.log (`${((trainC/totalW)*100).toFixed(2)}%`)
}
logistics (["4", "1", "5", "16", "3"])