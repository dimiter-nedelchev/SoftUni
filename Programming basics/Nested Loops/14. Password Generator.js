function passwordGenerator (input) {

    let num1=Number (input[0])
    let num2=Number (input[1])
    let total=''

    for (i=1;i<=num1;i++) {
        for (j=1;j<=num1;j++) {
            for (k=97;k<=96+num2;k++) {
                for (m=97;m<=96+num2;m++) {
                    for (n=1;n<=num1;n++) {
                        if (n>i && n>j) {
                            total+= i.toString() + j.toString () + String.fromCharCode(k) + String.fromCharCode (m) + n.toString () + " "
                        }
                    }
                }
            }
        }
    }
    console.log (total)
}
//passwordGenerator (["2","4"])
//passwordGenerator (["3","1"])
//passwordGenerator (["3", "2"])
//passwordGenerator (["4", "2"])