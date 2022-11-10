function sumPrimeNonPrime (input) {

    let index=0
    let command=input[index++]

    let sumPrime=0
    let sumNonPrime=0

    let num=0

    while (command!=="stop") { 
        
        num=Number (command)
       if (num<0) {
            console.log (`Number is negative.`)
            command=input [index++]
            continue;
       }
        
       else if (num%2!==0 && num%3!==0 && num%5!==0 && num%7!==0 || num===2 || num===3 || num===5 || num===7 ) {
            sumPrime+= num
        }

        else  {
            sumNonPrime+= num
        }
        command=input [index++]
    
}
    console.log (`Sum of all prime numbers is: ${sumPrime}`)
    console.log (`Sum of all non prime numbers is: ${sumNonPrime}`)
}