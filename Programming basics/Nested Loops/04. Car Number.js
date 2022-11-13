function carNumber (input) {

let start=Number (input[0])
let end=Number (input[1])

let plate=''
let sum=0
        for (i=start;i<=end;i++) {
            for (j=start;j<=end;j++) {
                for(k=start;k<=end;k++) {
                    for (l=start;l<=end;l++) {
                        if (i%2==0 && l%2!==0 || l%2===0 && i%2!==0) {
                            if (i>l) {
                                if ((j+k)%2==0) {
                                    plate+= i.toString () + j.toString() + k.toString() + l.toString() + " "
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log (plate)
}
//carNumber (["2","3"])
//carNumber (["3","5"])
carNumber (["6","8"])