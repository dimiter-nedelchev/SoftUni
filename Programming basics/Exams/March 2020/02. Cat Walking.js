function catWalking(input) {

    let duration=Number(input[0]);
    let walks=Number(input[1]);
    let kcal=Number(input[2]);

    let totalDuration=duration*walks;
    let totalKcal=totalDuration*5;

    if (totalKcal>=(0.5*kcal)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalKcal}.`);
    }
    else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalKcal}.`);
    }
}
//catWalking (["30","3","600"])
catWalking (["15","2","500"])
