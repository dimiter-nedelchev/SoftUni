function trainTheTrainers (input) {

    let index=0
    let jury=Number (input [index++])
    
    let command=input [index++]
    
    let presentation=''
    let presentationCount=0
    let grade=0
    let averageGrade=0
    let assessment=0
    
    while (command!=="Finish") {presentation=command
        for (i=1;i<=jury;i++) {
            grade=Number (input[index++])
            averageGrade+= grade
    
            if (i===jury) {
                console.log (`${presentation} - ${((averageGrade/jury).toFixed(2))}.`)
                assessment+= (averageGrade/jury)
                presentationCount+= 1
                grade=0
                averageGrade=0
                command=input[index++]
                break;
            }
        }
    }
     console.log (`Student's final assessment is ${((assessment/presentationCount).toFixed(2))}.`)
    }
    trainTheTrainers();