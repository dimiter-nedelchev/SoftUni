function walking (input) {

    let index=0
    let command=input [index++]
    let steps=0

    let totalSteps=0
    let goal=10000

    while (totalSteps<=goal) {
        
        if (command==="Going home") {
            steps=Number (input [index++])
            totalSteps += steps

            if (totalSteps>=goal) {
                console.log (`Goal reached! Good job!`)
                console.log (`${totalSteps-goal} steps over the goal!`)
                break;
            }
            else {
                console.log (`${goal-totalSteps} more steps to reach goal.`)
                break;
            }
        }
        steps=Number (command)

        totalSteps+= steps

        if (totalSteps>=goal) {
            console.log (`Goal reached! Good job!`)
            console.log (`${totalSteps-goal} steps over the goal!`)
            break;
        }
        command=input [index++]
    }
}