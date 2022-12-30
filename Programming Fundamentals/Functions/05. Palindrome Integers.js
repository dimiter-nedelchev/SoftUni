function palindromeIntegers(arr){

    let length=arr.length-1;
    let tempNum='';

    for(let i=0;i<=length;i++){
        let currentNum=arr[i];
        currentNum=currentNum.toString();

        for(let j=currentNum.length-1;j>=0;j--){
            tempNum+= currentNum[j]
        }
        tempNum=Number(tempNum);

        if(tempNum===arr[i]){
            console.log('true');
            tempNum='';
        }
        else{
            console.log('false');
            tempNum='';
        }
    }

}
palindromeIntegers([32,2,232,1010])