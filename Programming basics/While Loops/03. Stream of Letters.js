function streamOfLetters (input) {

    let index= 0

    let word=''
    let command=''
    let letter=''

    let i=0
    let o=0
    let n=0
    let c=0
    let log=0
    let newWord=''


    while (command!="End") {
        command=input [index++]
        letter=command

        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90 || letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {

        if (letter==="c" && i<3 && c<1 && letter!= "End") {
            i+= 1
            c+= 1
        }
        else if (letter==="c" && c>=1  && letter!= "End") {
            word+= letter
            c+= 1
        }
        if (letter==="o" && i<3 && o<1 && letter!= "End") {
            i+= 1
            o+= 1
        }
        else if (letter==="o" && o>=1 && letter!= "End") {
            word+= letter
            o+= 1
        }
        if (letter==="n" && i<3 && n<1 && letter!= "End") {
            i+= 1
            n+= 1
        }
        else if (letter==="n" && n>=1 && letter!= "End") {
            word+= letter
            n+= 1
        }

        if (letter!="c" && letter!="o" && letter!="n" && letter!= "End") {
            word+= letter
        }
        if (c>=1 && o>=1 && n>=1 && command!="End") {
            log+= 1
            c-= c
            o-= o
            n-= n
            i-= i
            newWord += word + ' '
            word='' 
        }
    }
}
console.log (newWord)
}

streamOfLetters (["H","n","e","l","l","o","o","c","t","c","h","o","e","r","e","n","e","End"])
//streamOfLetters (["o","S","%","o","l","^","v","e","c","n","&","m","e","c","o","n","End"])