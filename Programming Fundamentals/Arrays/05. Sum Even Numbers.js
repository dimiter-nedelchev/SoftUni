function sumEvenNumbers(numbers){

    let sum=0;
    
    for(let number of numbers) {

        number=Number(number);

        if(number%2===0){
            sum+=number;
        }
    }
    console.log(sum)
}
sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);