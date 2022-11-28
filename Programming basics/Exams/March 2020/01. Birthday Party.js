function birthdayParty(input) {

    let rent=Number(input)
    
    let cakePr=0.2*rent;
    let drinkPr=0.55*cakePr;
    let animatorPr=rent/3;

    let budget=cakePr+drinkPr+animatorPr+rent;

    console.log(budget);
}
birthdayParty (["2250"])
birthdayParty (3720)