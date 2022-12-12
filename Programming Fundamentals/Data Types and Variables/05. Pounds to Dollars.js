function poundsToDollars(bp) {

    const exchangeRate=1.31;

    let dollars=bp*exchangeRate;

    console.log(dollars.toFixed(3))

}
poundsToDollars(80);
poundsToDollars(39);