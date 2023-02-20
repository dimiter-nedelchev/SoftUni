function gcd(num1, num2){

    let maxNum= Math.max(num1, num2);
    let greatestCommonDividor= 0;

    for(let i=maxNum; i >= 1; i--){

        if(num1 % i == 0 && num2 % i == 0){
           console.log(i);
           return
        }
    }
}
gcd(2154, 458)