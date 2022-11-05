function moving (input) {

    let index=0
    let width=Number (input[index++])
    let height=Number (input[index++])
    let depth=Number (input [index++])

    let volume=width*height*depth
    let boxV=0
    let totalV=0

    let command=input [index++]

    while (totalV<=volume) {
        boxV=Number (command)
        
        totalV += boxV

        if (totalV>volume) {
            console.log (`No more free space! You need ${((totalV-volume))} Cubic meters more.`)
            break;
        }

        command=input [index++]

        if (command==="Done") {
            console.log (`${((volume-totalV))} Cubic meters left.`)
        }
    }
}