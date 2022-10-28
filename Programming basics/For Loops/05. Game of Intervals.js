function intervals (input) {

    let moves=Number (input.shift())

    let number=0
    let points=0
   

    let num1=0
    let num2=0
    let num3=0
    let num4=0
    let num5=0
    let num6=0

    let total=0
    
    for (i=1;i<=moves;i++) {
        number=Number (input.shift())
        if (number>=0 && number<=9) {
            points+= number*0.2
            num1+= 1
        }
        else if (number>=10 && number<=19) {
            points+= number*0.3
            num2+= 1
        }
        else if (number>=20 && number<=29) {
            points+= number*0.4
            num3+= 1
        }
        else if (number>=30 && number<=39) {
            points+= 50
            num4+= 1
        }
        else if (number>=40 && number<=50) {
            points+= 100
            num5+= 1
        }
        else if (number<0 || number>50) {
            points= points/2
            num6+= 1
        }
        total+= 1
    }
    console.log (`${points.toFixed(2)}`)
    console.log (`From 0 to 9: ${((num1/total)*100).toFixed(2)}%`)
    console.log (`From 10 to 19: ${((num2/total)*100).toFixed(2)}%`)
    console.log (`From 20 to 29: ${((num3/total)*100).toFixed(2)}%`)
    console.log (`From 30 to 39: ${((num4/total)*100).toFixed(2)}%`)
    console.log (`From 40 to 50: ${((num5/total)*100).toFixed(2)}%`)
    console.log (`Invalid numbers: ${((num6/total)*100).toFixed(2)}%`)

}
intervals (["10","43","57","-12","23","12","0","50","40","30","20"])
