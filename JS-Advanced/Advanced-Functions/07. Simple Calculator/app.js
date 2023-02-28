function calculator() {
    let numElement1;
    let numElement2;
    let sumElement;

    return {
        init(selector1, selector2, selector3) {
            numElement1= document.querySelector(selector1);
            numElement2= document.querySelector(selector2);
            sumElement= document.querySelector(selector3);
        },
        add () {
            sumElement.value= Number(numElement1.value) + Number(numElement2.value)
        },
        subtract (){
            sumElement.value= Number(numElement1.value) - Number(numElement2.value)
        }
    }
}
const calculate= calculator();
calculate.init('#num1', '#num2', '#result')



