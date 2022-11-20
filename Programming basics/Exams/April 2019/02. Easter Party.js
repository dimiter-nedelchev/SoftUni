function easterParty (input) {

    let guests=Number (input[0])
    let partyPr=Number (input[1])
    let budget=Number (input[2])

    let cakePr=budget*0.1

    if (guests<10) {
        partyPr=partyPr
    }
    else if (guests>=10 && guests<=15) {
        partyPr=partyPr*0.85
    }
    else if (guests>=16 && guests<=20) {
        partyPr=partyPr*0.8
    }
    else {
        partyPr=partyPr*0.75
    }

    let total=cakePr + (partyPr*guests)

    if (total<=budget) {
        console.log (`It is party time! ${(budget-total).toFixed(2)} leva left.`)
    }
    else {
        console.log (`No party! ${(total-budget).toFixed(2)} leva needed.`)
    }
}
//easterParty (["18","30","450"])	
easterParty (["8","25","340"])
//easterParty (["24","35","550"])	