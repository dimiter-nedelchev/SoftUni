function bestPlayer (input) {

    let index=0
    let command=input[index++]
    let max=Number.MIN_SAFE_INTEGER
    let goals=0
    let bestPlayer=''

    while (command!=="END") {
        player=command
        goals=Number (input[index++])

        if (goals>max) {
            max=goals
            bestPlayer=player
        }
        
        if (goals>=10) {
                console.log (`${bestPlayer} is the best player!`)
                console.log (`He has scored ${max} goals and made a hat-trick !!!`)
                break;
        }
        
        command=input [index++]

        if (command==="END") {
            if (max>=3) {
                console.log (`${bestPlayer} is the best player!`)
                console.log (`He has scored ${max} goals and made a hat-trick !!!`)
                break;
            }
            else {
                console.log (`${bestPlayer} is the best player!`)
                console.log (`He has scored ${max} goals.`)
                break;
            }
        }
    }

}
//bestPlayer (["Neymar", "2","Ronaldo","1","Messi","3","END"])
//bestPlayer (["Silva","5","Harry Kane","10"])
//bestPlayer (["Petrov","2","Drogba","11"])
//bestPlayer (["Rooney","1","Junior","2","Paolinio","2","END"])
bestPlayer (["Zidane","1","Felipe","2","Johnson","4","END"])

