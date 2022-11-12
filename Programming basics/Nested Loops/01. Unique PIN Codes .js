function pinCode (input) {
    let num1=Number (input[0])
    let num2=Number (input[1])
    let num3=Number (input[2])

    let realNum=false
    let c=0

    for (i=1;i<=num1;i++) {if (i>=1 && i<=9) {
        if (i%2==0) {
        for (j=1;j<=num2;j++){if (j>=2 && j<=7 && j!==4 && j!==6) {if (j%i===0 && j!==2) {
            if (realNum===true) {
                realNum=false
                continue;
            }
            else if (realNum===false) {
                realNum=true
                continue;
            }
        }
       
        for (k=1;k<=num3;k++) {if (num3>=1 && num3<=9) {if (k%2==0) {
            console.log (`${i} ${j} ${k}`)
        }
        }
        else {
            break;
        }
    }
    }
    else {
        continue;
    }
    }
    }
}
else {
    break;
}
    }
}
    pinCode (["9","9","9"])
   //pinCode (["8","2","8"])