function exam (input) {

    let index=0
    let poorGr=Number (input[index++])
    let command=input [index++]
    
    
    let avg=0
    let tasks=0
    let fail=0
    
    let task=''
    let grade=''
    
    while (command!=="Enough") {
        task=command 
        command=input [index++]
        grade=Number (command)
    
        if (grade<=4) {
            fail += 1
            if (fail>=poorGr) {
                console.log (`You need a break, ${fail} poor grades.`)
                break;
            }
        }
        tasks += 1
        avg += grade
    
        command=input [index++]
        if (command==="Enough") {
            console.log (`Average score: ${((avg/tasks).toFixed(2))}`)
            console.log (`Number of problems: ${tasks}`)
            console.log (`Last problem: ${task}`)
            break;
        }
    }
    }