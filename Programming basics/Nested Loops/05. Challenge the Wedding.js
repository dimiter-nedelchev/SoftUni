function challengeTheWedding (input) {

    let index=0
    let men=Number (input [index++])
    let women=Number (input [index++])
    let tables=Number (input [index++])

    let tableCount=0
    let total=''
    let fullTables=false

    for (i=1;i<=men;i++) {
        for (j=1;j<=women;j++) {
            tableCount+= 1
            total+= "("+ + i.toString() + " " + "<->" + " " + j.toString() + ")" + " "
            if (tableCount===tables) {
                fullTables=true
                break;  
            }
        }
        if (fullTables===true) {
            break;
        }
    }
    console.log (total)
}
challengeTheWedding (["5", "6","8"])