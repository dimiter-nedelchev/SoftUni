function gladiatorExpenses(losses, helmet, sword, shield,armor) {

    const loss=losses;
    const helmetPr=helmet;
    const swordPr=sword;
    const shieldPr=shield;
    const armorPr=armor;

    let repairs=0;

    let shieldCounter=0;

    for (let i=1;i<=loss;i++) {
        if (i%2===0) {
            repairs+= helmetPr;
            if (i%3===0) {
                repairs+= swordPr + shieldPr;
                shieldCounter+= 1;
                if(shieldCounter%2===0) {
                    repairs+= armorPr;
                }
            }
        }
        else if (i%3===0) {
            repairs+= swordPr;
        }
    }
    console.log(`Gladiator expenses: ${repairs.toFixed(2)} aureus`)
}
gladiatorExpenses(7,2,3,4,5);
gladiatorExpenses(23,12.50,21.50,40,200);