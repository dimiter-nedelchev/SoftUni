function factorial(num1,num2) {

    let decrement1=num1;
    let decrement2=num2;

    let sumReturn1=factorial1(num1,decrement1);
    let sumReturn2=factorial2(num2,decrement2);

    let sum1=0
    let sum2=0

    function factorial1(num1,decrement1){

        let nextNum=decrement1-1
        let sum=num1*nextNum;

        if(nextNum>=1){
           return factorial1(sum,nextNum);
        }
        else {
            return num1;
        }
    }
    
    function factorial2(num2,decrement2){

        let nextNum=decrement2-1;
        let sum=num2*nextNum;

        if(nextNum>0){
        return factorial2(sum,nextNum);
        }
        else {
        return num2;
        }
    }

    let result=sumReturn1/sumReturn2;
    console.log(result.toFixed(2))
}
factorial(6,2)