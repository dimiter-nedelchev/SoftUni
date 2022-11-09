function sumOfTwoNumbers (input) {

    let magicNum=Number (input[2])
    let startNum=Number (input[0])
    let endNum=Number (input[1])


    let count=0
    let magicFound=false

    for (i=startNum;i<=endNum;i++) {
        for (j=startNum;j<=endNum;j++) {
            count+= 1

            if (i+j===magicNum) {
                console.log (`Combination N:${count} (${i} + ${j} = ${magicNum})`)
                magicFound=true
                break;
            }
        }
        if (magicFound===true) {
            break;
        }
    }
    if (magicFound===false) {
        console.log (`${count} combinations - neither equals ${magicNum}`)
    }
}
sumOfTwoNumbers()