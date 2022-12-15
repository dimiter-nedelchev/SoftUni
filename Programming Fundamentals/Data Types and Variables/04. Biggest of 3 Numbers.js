function biggestNum(num1,num2,num3) {

    let max=Number.MIN_SAFE_INTEGER;

    if (num1>=num2 && num2>=num3) {
        console.log(num1);
    }
    else if (num1>=num3 && num3>=num2) {
        console.log(num1);
    }
    else if (num2>=num1 && num1>=num3) {
        console.log(num2);
    }
    else if (num2>=num3 && num3>=num1) {
        console.log(num2);
    }
    else if (num3>=num1 && num1>=num2) {
        console.log(num3);
    }
    else if (num3>=num2 && num2>=num1) {
        console.log(num3)
    }
}
biggestNum(-2,7,3);
biggestNum(130,5,99);
biggestNum(43,43.2,43.1);
biggestNum(2,2,2);