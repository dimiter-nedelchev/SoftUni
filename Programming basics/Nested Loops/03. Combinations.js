function combinations (input) {

    let num=Number (input[0])
    let combinations=0

    for (i=0;i<=num;i++) {
        for (j=0;j<=num;j++) {
            for (k=0;k<=num;k++) {
                if (i+j+k===num) {
                    combinations+= 1
                }
            }
        }
    }
    console.log (combinations)
}
combinations()