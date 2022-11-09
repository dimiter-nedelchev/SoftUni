function travelling (input) {

    let index=0
    let command=input [index++]
    let sum=0
    let money=0

    let enoughMoney=false

    while (command!=="End") {
        destination=command
        budget=Number (input[index++])

        while (sum<budget) {
            command=input [index++]
            money=Number (command)
            sum+= money
        }
        sum=0
        console.log (`Going to ${destination}!`)
        command=input [index++]

        if (command==="End") {
            enoughMoney=true;
            break;
         }
        if (enoughMoney===true) {
            break;
        }
    }

}
travelling();