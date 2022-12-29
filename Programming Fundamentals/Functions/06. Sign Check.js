function signCheck(numOne,numTwo,numThree){

    checkResult(numOne,numTwo,numThree);

    function checkResult(numOne,numTwo,numThree){
        let result=numOne/numTwo/numThree;
        return result;
    }

    if(checkResult(numOne,numTwo,numThree)<0){
        console.log('Negative');
    }
    else{
        console.log('Positive')
    }
}
signCheck( 5,
    12,
   -15
   );
signCheck(-6,
    -12,
     14
    );
signCheck(-1,
    -2,
    -3
    );
signCheck(-5,
    1,
    1
   );