function energyBooster(input) {

    let fruit=input[0];
    let size=input[1];
    let amount=Number(input[2]);

    let total=0;

    if (size==="small") {
        if (fruit==="Watermelon") {
            total=(amount*56)*2;
        }
        else if (fruit==="Mango") {
            total=(amount*36.66)*2;
        }
        else if (fruit==="Pineapple") {
            total=(amount*42.10)*2;
        }
        else {
            total=(amount*20)*2;
        }
    }
    else if (size==="big") {
        if (fruit==="Watermelon") {
            total=(amount*28.70)*5;
        }
        else if (fruit==="Mango") {
            total=(amount*19.60)*5;
        }
        else if (fruit==="Pineapple") {
            total=(amount*24.80)*5;
        }
        else {
            total=(amount*15.20)*5;
        }
    }

    if (total>=400 && total<=1000) {
        total*=0.85;
    }
    else if (total>1000) {
        total*=0.5;
    }
    console.log(`${total.toFixed(2)} lv.`)
}
energyBooster (["Watermelon","big","4"])
energyBooster (["Pineapple","small","1"])
