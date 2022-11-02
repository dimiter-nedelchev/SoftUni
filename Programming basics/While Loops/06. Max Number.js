function maxNumber (input) {

    let index=0
    let command=Number (input[index++])

    let max= Number.MIN_SAFE_INTEGER

    while (command!="Stop") {
        
        let number= Number (command)

        if (number>max) {
            max=number
        }
        command=input [index++]
    }
    console.log (`${max}`)
}
//maxNumber (["100", "99", "80", "70", "1001", "Stop"])
maxNumber (["-10", "20", "-30", "Stop"])