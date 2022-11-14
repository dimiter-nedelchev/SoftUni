function passwordGenerator (input) {

    let x=Number (input[0])
    let y=Number (input[1])
    let counter1=0
    let counter2=0
    let pass=''
    let maxPass=Number (input[2])
    let passCount=0
    let maximum=false

    for (i=1;i<=x;i++) {
        for (j=1;j<=y;j++) {
            counter1 += 1
            counter2 += 1
            if (counter1===22) {
                counter1=1
            }
            if (counter2===34) {
                counter2=1
            }
            pass+= String.fromCharCode (34+counter1) + String.fromCharCode (63+counter2) + i.toString() + j.toString() + String.fromCharCode (63+counter2) + String.fromCharCode (34+counter1) + "|"
            passCount+= 1
            if (passCount>=maxPass) {
                maximum=true
                break;
            }
        }
        if (maximum===true) {
            break;
        }
    } 
    console.log (pass) 
}
//passwordGenerator (["2","3","10"])
//passwordGenerator (["20","50","10"])