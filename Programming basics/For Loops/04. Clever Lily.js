function cleverlily (input) {

    let index=0
    let age= Number (input[index++])
    let washmashine=Number (input[index++])
    let toyprice=Number (input[index++])

    let toys=0
    let money=0

    totalPr=0

    for (i=1;i<=age;i++) {
        if (i%2==0 && i===2) {
            money+= 10 -1
        }
        else if (i%2==0 && i!=2) {
            money+= ((10*i)/2) -1
        }
        else {
            toys+=1
        }
    }
    totalPr=money+(toys*toyprice)

    if (totalPr>=washmashine) {
        console.log (`Yes! ${(totalPr-washmashine).toFixed(2)}`)
    }
    else {
        console.log (`No! ${(washmashine-totalPr).toFixed(2)}`)
    }
}
//cleverlily (["10","170.00","6"])
cleverlily (["21","1570.98","3"])
