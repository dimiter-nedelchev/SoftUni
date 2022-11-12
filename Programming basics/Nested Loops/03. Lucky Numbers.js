function luckyNumbers (input) {

    let number=Number (input [0])
    let sum1=0
    let sum2=0

    let total1=''
    let total2=''

    for (i=1;i<number;i++) {if (i<10) {
        for(j=1;j<number;j++) {if (j<10) {

        sum1=i+j
        if (number%(i+j)===0) {
            for (k=1;k<number;k++) {if (k<10) {
                for (l=1;l<number;l++) {if (l<10) {

                sum2=k+l
                if (sum1===sum2) {
                    total1 += i.toString () + j.toString () + k.toString() + l.toString() + " "
                }
                else {
                    continue;
                }
            }
            else {
                break;
            }
            }
        }
        else {
            break
        }
        }

    }
    else {
        continue;
    }
    }
    else {
        break;
    }
}
}
else {
    break; 
}
}
console.log (total1)
}
luckyNumbers (["3"])
//luckyNumbers (["24"])