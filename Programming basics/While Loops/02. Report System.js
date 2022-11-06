function charity (input) {
    index=0
   
    let fundraiser=Number (input[index++])

    let command=input [index++]
    let sum=0

    let CS=0
    let CC=0

    let cash=0
    let card=0

    let total=0

    let i=0

    while (command!="End") {
        
        sum=Number (command)
        i+= 1

        if (i%2==0) {
            if (sum<10) {
                console.log ("Error in transaction!")
            }
            else  {
                CC+= 1
                card+= sum
                total+= sum
                console.log (`Product sold!`)
            }
        }
        
       else {     if (sum>100) {
                console.log ("Error in transaction!")
            }
            else {
                CS+= 1
                cash+= sum
                total+= sum
                console.log (`Product sold!`)
            }
        }
        

        if (total>=fundraiser) {
            console.log (`Average CS: ${(cash/CS).toFixed(2)}`)
            console.log (`Average CC: ${(card/CC).toFixed(2)}`)
            break;
        }

        else if (command==="End") {
            console.log (`Failed to collect required money for charity.`)
            break;
        }
        command=input [index++]
    }
}
charity (["500","120","8","63","256","78","317"])