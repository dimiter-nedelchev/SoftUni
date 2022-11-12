function letterCombinations (input) {

    let firstLetter=input [0].charCodeAt ()
    let secondLetter=input[1].charCodeAt ()
    let exception=input [2].charCodeAt ()

    let sum=''
    let c=0
   


    for (let i=firstLetter;i<=secondLetter;i++) {
        if (i===exception) {
            continue;
        }
        
        for (let j=firstLetter;j<=secondLetter;j++) {
            if (j===exception) {
                continue;
            }
            
            for (let k=firstLetter;k<=secondLetter;k++) {
                if (k===exception) {
                    continue;
                }
            sum += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " "
            c+= 1
            }
        
        }
    
    }
    console.log (`${sum}${c}`)
}
letterCombinations (["a","c","b"])
