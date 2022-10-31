function oddEven (input) {
    index=0
    let number=Number (input[index++])

    let num=0

    let evenSum=0
    let evenMin=0
    let evenMax=0

    let oddSum=0
    let oddMin=0
    let oddMax=0

    let eMin= 1000.0
    let eMax= -1000.0

    let oMin= 1000.0
    let oMax= -1000.0



    for (i=1;i<=number;i++) {
        num= Number (input[index++])
        if (i%2==0) {
            evenSum+= num
            if (num<eMin) {
                eMin=num
                evenMin=eMin
            }
            if (num>eMax) {
                eMax=num
                evenMax=eMax
            }
        }
        else {
            oddSum+= num
            if (num<oMin) {
                oMin=num
                oddMin=oMin
            }
            if (num>oMax) {
                oMax=num
                oddMax=oMax
            }
        }
    }

    console.log (`OddSum=${oddSum.toFixed(2)},`)
    if (oMin===1000) {
        console.log (`OddMin=No,`)
    }
    else {
        console.log (`OddMin=${oddMin.toFixed(2)},`)
    }
     if (oMax===-1000) {
        console.log (`OddMax=No,`)
    }
    else {
        console.log (`OddMax=${oddMax.toFixed(2)},`)
    }
    console.log (`EvenSum=${evenSum.toFixed(2)},`)

    if (eMin===1000) {
        console.log (`EvenMin=No,`)
    }
    else {
        console.log (`EvenMin=${evenMin.toFixed(2)},`)
    }
    if (eMax===-1000) {
        console.log (`EvenMax=No`)
    }
    else {
    console.log (`EvenMax=${evenMax.toFixed(2)}`)
}
}
//oddEven (["6","2","3","5","4","2","1"])
//oddEven (["2","1.5","-2.5"])
oddEven (["1","1"])
//oddEven (["0"])
//oddEven (["5","3","-2","8","11","-3"])
//oddEven (["4","1.5","1.75","1.5","1.75"])
//oddEven (["1", "-5"])
//oddEven (["3","-1","-2","-3"])