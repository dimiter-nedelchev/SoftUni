function primePairs (input) {

    let startValue1=Number (input[0])
    let startValue2=Number (input[1])
    let difference1=Number (input[2])
    let difference2=Number (input[3])

    let sum1=''
    let sum2=''

    let total=''

    for (i=1;i<=9;i++) { {
        for (j=1;j<=9;j++) { sum1=i.toString () + j.toString() 
            if (Number (sum1) %2!==0 && Number (sum1)%3!==0 && Number(sum1)%5!==0 && Number(sum1)%7!==0) {
            if (Number (sum1)<=startValue1 + difference1 && Number (sum1)>=startValue1) {
            for (k=1;k<=9;k++) {
                for (m=1;m<=9;m++) {sum2=k.toString () + m.toString()
                    if (Number (sum2) %2!==0 && Number (sum2)%3!==0 && Number(sum2)%5!==0 && Number(sum2)%7!==0) {
                    if (Number(sum2)<=startValue2+difference2 && Number (sum2)>=startValue2) {
                        total += sum1.toString() + sum2.toString() + "\n"
                    }
                }  
                }
                
            
             }
            }
        }
        }
    }
}
console.log (total)
}
primePairs (["10","20","5","5"])
//primePairs (["10","30","9","6"])
