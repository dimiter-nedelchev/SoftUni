function tournament (input) {

    let capacity=Number (input.shift())
    let fans=Number (input.shift())

    let teamA=0
    let teamB=0
    let teamV=0
    let teamG=0

    let command=''
    

    
    

   for (i=0;i<=fans;i++) {
        command= input.shift()
        if (command==="A") {
            teamA+= 1
        }
        else if (command==="B") {
            teamB+= 1
        }
        else if (command==="V") {
            teamV+= 1
        }
        else if (command==="G") {
            teamG+= 1
        }
    }
    console.log (`${((teamA/fans)*100).toFixed(2)}%`)
    console.log (`${((teamB/fans)*100).toFixed(2)}%`)
    console.log (`${((teamV/fans)*100).toFixed(2)}%`)
    console.log (`${((teamG/fans)*100).toFixed(2)}%`)
    console.log (`${((fans/capacity)*100).toFixed(2)}%`)
}  

//tournament (["10","10","A","V","V","V","G","B","A","V","B","B"])
//tournament (["93","16","A","V","G","G","B","B","G","B","A","B","B","B","A","B","B","A"])
//tournament (["1000","12","A","A","V","V","A","G","A","A","V","G","V", "A"])