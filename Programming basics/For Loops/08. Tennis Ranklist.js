function tennis (input) {
    index=0
    let tournament=Number (input[index++])
    let startpoints=Number (input[index++])

    let result=''
    let points=0

    let total=0

    let finalPoints=0
    let averagePoints=0

    let wins=0

    for (i=1;i<=tournament;i++) {
        result=input[index++]

        if (result==="W") {
            points+= 2000
            wins+= 1
        }
        else if (result==="F") {
            points+= 1200
        }
        else if (result==="SF") {
            points+= 720
        }
        total+= 1
    }
    finalPoints=points+startpoints
    averagePoints=points/total

    console.log (`Final points: ${finalPoints}`)
    console.log (`Average points: ${Math.floor(averagePoints)}`)
    console.log (`${((wins/total)*100).toFixed(2)}%`)

}
tennis (["5","1400","F","SF","W","W","SF"])
//tennis (["4","750","SF","W","SF","W"])
//tennis (["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])