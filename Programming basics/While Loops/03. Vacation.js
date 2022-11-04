function vacation (input) {

    let index=0
    let neededMoney=Number (input[index++])
    let savings=Number (input[index++])
    let command=input [index++]


    let spendDays=0
    let operation=''
    let amount=''
    let days=0

    while (savings<neededMoney) {
        operation=command
        command= input [index++]
        amount=Number (command)
        days += 1

        if (operation==="spend") {
            savings -= amount
            spendDays += 1
                if (spendDays>=5) {
                    console.log (`You can't save the money.`)
                    console.log (`${days}`)
                    break;
                }
                if (savings<0) {
                    savings=0
                    
                }
        }
        else if (operation==="save") {
            savings += amount
            spendDays=0
        }
        command=input [index++]

        if (savings>=neededMoney) {
            console.log (`You saved the money for ${days} days.`)
        }
    }
}