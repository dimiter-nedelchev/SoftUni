function easterEggsBattle (input) {
    
    let index=0
    let player1=Number (input[index++])
    let player2=Number (input[index++])

    let command=input [index++]

    let winner=''

    while (command!=="End") {
        winner=command

        if (winner==="one") {
            player2-= 1
        }
        else if (winner==="two") {
            player1-= 1
        }

        if (player1<=0) {
            console.log (`Player one is out of eggs. Player two has ${player2} eggs left.`)
            break;
        }

        else if (player2<=0) {
            console.log (`Player two is out of eggs. Player one has ${player1} eggs left.`)
            break;
        }

        command=input [index++]

        if (command==="End") {
            console.log (`Player one has ${player1} eggs left.`)
            console.log (`Player two has ${player2} eggs left.`)
        }
    }
}
//easterEggsBattle (["5","4","one","two","one","two","two","End"])
//easterEggsBattle (["2","6","one","two","two"])
easterEggsBattle (["6","3","one","two","two","one","one"])
