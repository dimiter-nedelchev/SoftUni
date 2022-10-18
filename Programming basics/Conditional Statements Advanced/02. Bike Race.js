function bikeRace (input) {

    let juniorN=Number (input[0])
    let seniorN=Number (input[1])
    let track=input [2]

    let juniorPr=0
    let seniorPr=0
    let totalPr=0

    if (track==="trail") {
        juniorPr=juniorN*5.50
        seniorPr=seniorN*7
        totalPr=juniorPr+seniorPr
    }
    else if (track==="cross-country") {
        juniorPr=juniorN*8
        seniorPr=seniorN*9.50
        totalPr=juniorPr+seniorPr
        if (seniorN + juniorN>=50) {
            totalPr=totalPr*0.75
        }
        else {
            totalPr=totalPr
        }
    }
    else if (track==="downhill") {
        juniorPr=juniorN*12.25
        seniorPr=seniorN*13.75
        totalPr=juniorPr+seniorPr
    }
    else if (track==="road") {
        juniorPr=juniorN*20
        seniorPr=seniorN*21.5
        totalPr=juniorPr+seniorPr
    }
    totalPr=totalPr*0.95
    console.log (totalPr.toFixed(2))
}
//bikeRace (["10", "20", "trail"])
//bikeRace (["21","26","cross-country"])
bikeRace (["30","25","cross-country"])
//bikeRace (["10","10","downhill"])