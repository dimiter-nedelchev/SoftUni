function oscars (input) {
    index=0
    let actor=input [index++]
    let points= Number (input[index++])

    let judge=''
    let pointsJ=0

    let score=0
    let score1=0
    let judges=Number (input[index++])

    for (i=1;i<=judges;i++) {
        judge=input [index++]
        pointsJ= Number (input[index++])

        score= (judge.length*pointsJ)/2
        score1+= score

        if (score1+points>1250.5) {
            break;
        }
    }
    if (score1+points>1250.5) {
        console.log (`Congratulations, ${actor} got a nominee for leading role with ${((score1+points).toFixed(1))}!`)
    }
    else {
        console.log (`Sorry, ${actor} you need ${((1250.5-(score1+points)).toFixed(1))} more!`)
    }
}
//oscars (["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])
//oscars (["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"])

