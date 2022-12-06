function spiceMustFlow(num) {

    let yield=num;

    let minedSpice=0;

    let days=0;

    const mineCrew=26;

    while(yield>=100) {
        days+= 1;
        minedSpice+= yield;

        if (minedSpice>=mineCrew) {
            minedSpice-= mineCrew;
        }

        yield-= 10;
        if (yield<100) {
            if (minedSpice>=mineCrew)
            minedSpice-= mineCrew;
        }
    }
    console.log(days)
    console.log(minedSpice)
}
spiceMustFlow(111);
spiceMustFlow(450);