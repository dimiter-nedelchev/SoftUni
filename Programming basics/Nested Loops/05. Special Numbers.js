function specialNumbers (input) {

    let num=Number (input[0])
    let total=''

    for (i=1;i<=9;i++) {
        for (j=1;j<=9;j++) {
            for (k=1;k<=9;k++) {
                for (m=1;m<=9;m++) {
                    if (num%i===0 && num%j===0 && num%k===0 && num%m===0) {
                        total+= `${i}${j}${k}${m} `
                    }
                }
            }
        }
    }
    console.log (total)
}
specialNumbers();