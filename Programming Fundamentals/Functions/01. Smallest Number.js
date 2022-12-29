    function smallestNumber(num1,num2,num3){

        let arr=[num1,num2,num3]
    
        let min=Number.MAX_SAFE_INTEGER;
        let length=arr.length-1
    
        for(i=0;i<=length;i++){
    
            if(arr[i]<min){
                min=arr[i];
            }
        }
        console.log(min)
    }
smallestNumber(2, 5,3);
smallestNumber(600,342,123);
smallestNumber(25,21,4);
smallestNumber(2, 2,2);