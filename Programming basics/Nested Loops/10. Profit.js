function profit (input) {

    let coin1=Number (input[0])
    let coin2=Number (input[1])
    let banknote= Number (input[2])
    let sum=Number (input[3])

    let coinSum1=0
    let coinSum2=0
    let banknoteSum=0

    let total=''

    for (i=0;i<=coin1;i++) {
        coinSum1=i*1
        for (j=0;j<=coin2;j++) {
            coinSum2=j*2
            for (k=0;k<=banknote;k++) {
                banknoteSum=k*5
                if (coinSum1 + coinSum2 + banknoteSum===sum) {
                    total += i.toString () + " " + "*" + " " + "1 lv." + " " + "+" + " " + j.toString () + " " + "*" + " " + "2 lv." + " " + "+" + " " + k.toString () + " " + "*" + " " + "5 lv." + " "+ "=" + " " + sum.toString() + " " + "lv." + "\n"
                }

            }
        }
    }
    console.log (total)
}
profit (["3", "2", "3", "10"])
//profit (["5", "3", "1", "7"])