function sumOfTwoNumbers (input) {
let start= Number (input [0])
let end= Number (input [1])
let magicNum=Number (input[2])

let magicCount=0
let totalCount=0
let magicTurn=0
let realNumFound=false


for (i=start;i<=end;i++) {
    for (j=start;j<=end;j++) {
        totalCount +=1 
        if (i+j===magicNum) {
            magicTurn=totalCount
            magicCount += 1

            console.log (`Combination N:${magicTurn} (${i.toString()} + ${j.toString()} = ${magicNum})`)
            realNumFound=true
            break;
        }
    }
    if (realNumFound===true) {
        break;
    }
}
if (magicCount===0) {
    console.log (`${totalCount} combinations - neither equals ${magicNum}`)
}
}
//sumOfTwoNumbers (["1","10","5"])
//sumOfTwoNumbers (["23", "24","20"])
//sumOfTwoNumbers (["88", "888", "1000"])
sumOfTwoNumbers (["88", "888", "2000"])