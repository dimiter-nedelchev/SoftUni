function sumOfNumbers(num1, num2){

    let firstNumber= Number(num1);
    let secondNumber= Number(num2);

    let sum= 0;

    for(let i= firstNumber;i <= secondNumber; i++){
        sum+= i;
    }
    console.log(sum)

}
sumOfNumbers('1', '5')