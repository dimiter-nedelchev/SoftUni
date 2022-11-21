function easterCompetition (input) {

    index=0
    let sweetBread=Number (input[index++])
    let command=input [index++]

    let stopFound=false
    let chefName=''
    let grade=0
    let totalGrade=0
    let maxPoints=Number.MIN_SAFE_INTEGER
    let winner=''

    for (i=1;i<=sweetBread;i++) {chefName=command
        while (command!=="Stop") {
            command=input [index++]
            
            if (command==="Stop") {
                console.log (`${chefName} has ${totalGrade} points.`)
                if (totalGrade>maxPoints) {
                    maxPoints=totalGrade
                    winner=chefName
                    console.log (`${chefName} is the new number 1!`)
                    command=input [index++]
                    totalGrade=0
                    break;
                } 
                else {
                    command=input [index++]
                    totalGrade=0
                    break;
                }   
            }

            grade=Number (command)
            totalGrade+= grade
            
        }
    }
   
    console.log (`${winner} won competition with ${maxPoints} points!`)
}
//easterCompetition (["3","Chef Manchev", "10","10","10","10","Stop","Natalie","8","2","9","Stop","George","9","2","4","2","Stop"])
easterCompetition (["2","Chef Angelov","9","9","9","Stop","Chef Rowe","10","10","10","10","Stop"])
