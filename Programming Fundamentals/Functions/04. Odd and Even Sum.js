function oddAndEvenSum(num){
    
    let number=num.toString();
    let oddSum= odd(number);
    let evenSum= even(number);

    function odd(number){
        let sum=0;
        for(i=0;i<number.length;i++) {
            let currentNum=Number(number[i])
            if(currentNum%2!==0){
                sum+= currentNum;
            }
        }
        return sum;
    }

    function even(number){
        let sum=0;
        for(i=0;i<number.length;i++){
            let currentNum=Number(number[i])
            if(currentNum%2===0){
                sum+= currentNum;
            }
        }
        return sum;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);