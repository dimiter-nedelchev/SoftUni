function dishwasher (input) {

    index=1
    let detergentBt=Number (input[0])
    let totalDetergent=detergentBt*750

    let dishes=0
    let pots=0
    let num=0
    let i=0

    let command=''

    while (command!="End") {
        command=input [index++]
        num=Number (command)
        i+= 1

        if (i%3==0 && command!="End") {
            totalDetergent-= num*15
            pots+= num
            if (totalDetergent<0) {
                console.log (`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`)
                break;
            }
        }

        else if (command!="End") {
            totalDetergent-= num*5
            dishes+= num
            if (totalDetergent<0) {
                console.log (`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`)
                break;
            }
        }
        if (command==="End") {
        console.log (`Detergent was enough!`)
        console.log (`${dishes} dishes and ${pots} pots were washed.`)
        console.log (`Leftover detergent ${totalDetergent} ml.`)
        }
    }
}

dishwasher (["2","53","65","55","End"])
//dishwasher (["1","10","15","10","12","13","30"])