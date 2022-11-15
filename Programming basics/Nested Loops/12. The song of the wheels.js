function wheels (input) {

    let value=Number (input[0])
    let total=''
    let count=0
    let pass=''
    let password=''
    let foundPass=false

    for (i=1;i<=9;i++) {
        for (j=1;j<=9;j++) { 
            for (k=1;k<=9;k++) {
                for (m=1;m<=9;m++) { if (i<j && k>m) {
                    if ((i*j)+(k*m)===value) {
                        total += i.toString () + j.toString () + k.toString () + m.toString () + " "
                        password= i.toString () + j.toString () + k.toString () + m.toString ()
                        count += 1
                        if (count===4) {
                            pass=password
                            foundPass=true
                        }
                    }
                }
                }
            }
        
        }
    }
    if (foundPass===true) {
        console.log (`${total}\nPassword: ${pass}`)
    }
    else {
        console.log (`${total}\nNo!`)
    }
}
wheels (["11"])
//wheels (["139"])
//wheels (["110"])
//wheels (["55"])