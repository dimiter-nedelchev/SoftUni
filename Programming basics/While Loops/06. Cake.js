function cake (input) {

    let index=0
    let width=input [index++]
    let length=input [index++]
    let command=input [index++]

    let cakeSize=width*length

    let pieces=0
    let piece=0

    while (command!=="STOP") {
        piece=Number (command)

        pieces += piece

        if (pieces>cakeSize) {
            console.log (`No more cake left! You need ${pieces-cakeSize} pieces more.`)
            break;
        }
        command=input [index++]

        if (command==="STOP") {
            console.log (`${cakeSize-pieces} pieces are left.`)
            break;
        }
    }
}