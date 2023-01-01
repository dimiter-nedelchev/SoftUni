function perfectNumber(num){

    let isPerfect= checkForPerfect(num);

    function checkForPerfect(num){
        let isValid=false;
        let sum=0;
        for(let i=1;i<num;i++) {
            if(num%i===0){
                sum+= i;
            }
        }
        if (sum===num){
            isValid=true;
            return isValid;
        }
        else{
            return isValid;
        }
    }

    if(isPerfect){
        console.log('We have a perfect number!')
    }
    else{
        console.log(`It's not so perfect.`)
    }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);