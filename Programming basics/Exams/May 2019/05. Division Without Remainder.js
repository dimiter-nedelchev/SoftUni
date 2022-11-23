function divisionWithoutRemainder (input) {

    let index=0
    let numCount=Number (input[index++])
    let num=0

    let num2=0
    let num3=0
    let num4=0

    let num2Percent=0
    let num3Percent=0
    let num4Percent=0


    for (i=1;i<=numCount;i++) {
        num=Number (input[index++])

        if (num%2==0) {
            num2+= 1
        }
        if (num%3==0) {
            num3+= 1
        }
        if (num%4==0) {
            num4+= 1
        }
    }
    num2Percent=(num2/numCount)*100
    num3Percent=(num3/numCount)*100
    num4Percent=(num4/numCount)*100

    console.log (`${num2Percent.toFixed(2)}%`)
    console.log (`${num3Percent.toFixed(2)}%`)
    console.log (`${num4Percent.toFixed(2)}%`)
}
//divisionWithoutRemainder (["10","680","2","600","200","800","799","199","46","128","65"])
divisionWithoutRemainder (["3","3","6","9"])
