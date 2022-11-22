function fruitmarket (arg1, arg2, arg3, arg4, arg5) {

    let raspberriesPr=Number (arg1)*0.5
    let orangePr=raspberriesPr*0.6
    let bananaPr=raspberriesPr*0.2

    let strawberries=Number (arg1)*Number (arg5)
    let raspberries=raspberriesPr*Number (arg4)
    let oranges=orangePr* Number (arg3)
    let bananas=bananaPr*Number (arg2)

    let total= strawberries + raspberries + oranges + bananas

    console.log (total.toFixed(2))
}
 
fruitmarket ("48","10","3.3","6.5","1.7")
//fruitmarket (["63.5","3.57","6.35","8.15","2.5"])
