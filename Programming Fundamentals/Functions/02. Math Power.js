function mathPower(num,power){

   let finalResult= getResult(num,power);

    function getResult(num,power){
        let result=Math.pow(num,power)
        return result;
    }

    console.log(finalResult)
}
mathPower(3,4);