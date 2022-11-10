function numberPyramid (input) {

    let n=Number (input[0])
    let current=1
    let isValid=false
    let printCurrentLine=''

    for (let rows=1;rows<=n;rows++) {
        for (let column=1;column<=rows;column++) {
            if (current>n) {
                isValid=true
                break;
            }
            printCurrentLine+= current + " "
            current++
        }  
        console.log(printCurrentLine) 
        printCurrentLine=''
        if (isValid) {
            break;
        }
    }
}
numberPyramid()