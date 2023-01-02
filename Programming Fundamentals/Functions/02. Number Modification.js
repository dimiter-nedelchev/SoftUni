function numberModification(num){

    let sumDigits=0;
    let averageDigits=0;
    let stringOfNum=num.toString();
    let length=stringOfNum.length

    for (let i=0;i<length;i++) {
        let currentNum=Number(stringOfNum[i]);
        sumDigits+= currentNum;
    }
    averageDigits=sumDigits/length;

    if(averageDigits>=5) {
        console.log(num);
    }
    else {
        console.log(modifyNum(num));
    }

    function modifyNum(num){
        let sum=0
       while(averageDigits<=5) {
        stringOfNum+='9'

        for(let i=0;i<stringOfNum.length;i++){
            let currentNum= Number(stringOfNum[i])
            sum+= currentNum
        }
        averageDigits=sum/stringOfNum.length
        
        if(averageDigits>=5) {
            return stringOfNum;
        }
        sum=0;
       }
    }

}
numberModification(5835);
numberModification(101);