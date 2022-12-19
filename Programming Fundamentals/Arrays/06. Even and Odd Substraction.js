function evenOddSubstraction(numbers){

    let sumEven=0;
    let sumOdd=0;
    let difference=0;

    for(let number of numbers) {

        if(number%2===0) {
            sumEven+= number;
        }
        else {
            sumOdd+= number;
        }
    }
    difference=sumEven-sumOdd;
    console.log(difference)
}
evenOddSubstraction([1,2,3,4,5,6]);
evenOddSubstraction([3,5,7,9]);
evenOddSubstraction([2,4,6,8,10]);