function simpleCalculator(numOne,numTwo,operator) {

    multiply(numOne,numTwo);
    add(numOne,numTwo);
    divide(numOne,numTwo);
    subtract(numOne,numTwo);

    function multiply(numOne,numTwo) {
        let result=numOne*numTwo;
        return result;
    }

    function add(numOne,numTwo) {
        let result=numOne+numTwo;
        return result;
    }

    function divide(numOne,numTwo) {
        let result=numOne/numTwo;
        return result;
    }

    function subtract(numOne,numTwo) {
        let result=numOne-numTwo;
        return result;
    }

   let finalResult= operator(numOne,numTwo)
}
simpleCalculator([5,5,'divide'])