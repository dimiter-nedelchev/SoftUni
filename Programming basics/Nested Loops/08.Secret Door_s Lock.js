function secretDoor (input) {

    let hundreds=Number (input[0])
    let tens=Number (input[1])
    let ones=Number (input[2])

    let secretPass=''

    for (i=1;i<=hundreds;i++) {
        for (j=1;j<=tens;j++) {
            for (k=1;k<=ones;k++) {
                if (i%2==0 && k%2==0) { if (j===2 || j===5 || j===3 || j===7) {
                    secretPass += i.toString() + " " + j.toString () + " " + k.toString() + "\n"
                }
                }
            }
        }
    }
    console.log (secretPass)
}
//secretDoor (["3","5","5"])
secretDoor (["8","2","8"])