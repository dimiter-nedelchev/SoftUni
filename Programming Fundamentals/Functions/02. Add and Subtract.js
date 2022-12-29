function addAndSubtract(num1,num2,num3){

    let resultAdd=sum(num1,num2);
    let resultSubtract=subtract(resultAdd,num3)

    function sum(num1,num2){
        let result=num1+num2;
        return result;
    }

    function subtract(resultAdd,num3) {
        let result= resultAdd-num3;
        return result;
    }
    console.log(resultSubtract)
}
addAndSubtract(23,6,10)
addAndSubtract(1,17,30);
addAndSubtract(42,58,100);