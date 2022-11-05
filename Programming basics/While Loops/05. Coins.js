function coins (input) {

    let change=Number (input[0])

    let coinCount=0

    while (change>0) {
        if (change>=2) {
            change -= 2
            coinCount += 1
            change=change.toFixed(2)
        }
        else if (change>=1) {
            change -= 1
            coinCount += 1
            change=change.toFixed(2)
        }
        else if (change>=0.50) {
            change -= 0.50
            coinCount += 1
            change=change.toFixed(2)
        }
        else if (change>=0.20) {
            change -= 0.20
            coinCount += 1
            change=change.toFixed(2)
        }
        else if (change>=0.10) {
            change -= 0.10
            coinCount += 1
            change=change.toFixed(2)
        }
        else if (change>=0.05) {
            change -= 0.05
            coinCount += 1
            change=change.toFixed(2)
        }
        else if (change>=0.02) {
            change -= 0.02
            coinCount += 1
            change=change.toFixed(2)
        }
        else if (change>=0.01) {
            change -= 0.01
            coinCount += 1
            change=change.toFixed(2)
        }
     }
     console.log (coinCount)
}