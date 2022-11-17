function easterGuests (input) {

    let guests=Number(input[0]);
    let budget=Number(input[1]);

    let sweetBrAm=Math.ceil(guests/3);
    let eggAm=guests*2;

    let sweetBrPr=sweetBrAm*4;
    let eggPr=0.45*eggAm;

    let totalPr=eggPr+sweetBrPr;

    if (totalPr<=budget) 
    {
        console.log(`Lyubo bought ${sweetBrAm} Easter bread and ${eggAm} eggs.`);
        console.log(`He has ${(budget-totalPr).toFixed(2)} lv. left.`)
    }
    else 
    {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totalPr-budget).toFixed(2)} lv. more.`);
    }

}
easterGuests (["10","35"])
//easterGuests (["9","12"])

