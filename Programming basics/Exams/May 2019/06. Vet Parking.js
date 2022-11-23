function parking (input) {

    let days=Number (input [0])
    let hours=Number (input [1])

    let total=0
    let endSum=0
    let daySum=''

    for (i=1;i<=days;i++) {
        for (j=1;j<=hours;j++) {
            if (i%2===0 && j%2!==0) {
                total += 2.5
            }
            else if (i%2!==0 && j%2===0) {
                total += 1.25
            }
            else {
                total += 1
            }
        }
        daySum += "Day:" + " " + i.toString () + " " + "-" + " " + total.toFixed(2) + " " + "leva" + "\n"
        endSum += total
        total=0
  }
  console.log (`${daySum}Total: ${endSum.toFixed(2)} leva`)
}
parking (["2","5"])
parking (["5","2"])

