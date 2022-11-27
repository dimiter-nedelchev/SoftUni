function balls (input) {

    let index=0
    let balls=Number (input[index++])

    let redBalls=0
    let orangeBalls=0
    let yellowBalls=0
    let whiteBalls=0
    let otherBalls=0
    let blackBalls=0

    let ballColor=''

    let points=0

    for (i=1;i<=balls;i++) {
        ballColor=input[index++]
        
        if (ballColor==="red") {
            points+= 5
            redBalls+= 1
        }
        else if (ballColor==="orange") {
            points+= 10
            orangeBalls+= 1
        }
        else if (ballColor==="yellow") {
            points+= 15
            yellowBalls+= 1
        }
        else if (ballColor==="white") {
            points+= 20
            whiteBalls+= 1
        }
        else if (ballColor==="black") {
            points=Math.floor(points/2)
            blackBalls+= 1
        }
        else {
            otherBalls+= 1
        }
    }
    console.log (`Total points: ${points}`)
    console.log (`Red balls: ${redBalls}`)
    console.log (`Orange balls: ${orangeBalls}`)
    console.log (`Yellow balls: ${yellowBalls}`)
    console.log (`White balls: ${whiteBalls}`)
    console.log (`Other colors picked: ${otherBalls}`)
    console.log (`Divides from black balls: ${blackBalls}`)
}
//balls (["3","white","black","pink"])
balls (["5","red","red","ddd","ddd","ddd"])

