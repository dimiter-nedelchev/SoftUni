function carWash(arr){

    let index=0;
    let command='';
    let cleanedState=0;

    for(let i=0;i<=arr.length-1;i++){
        command=arr[index++];

        if(command==='soap'){
            cleanedState+= 10;
        }
        else if(command==='water'){
            cleanedState*= 1.2;
        }
        else if(command==='vacuum cleaner'){
            cleanedState*= 1.25;
        }
        else {
            cleanedState*=0.9;
        }
    }
    console.log(`The car is ${cleanedState.toFixed(2)}% clean.`)
}
carWash(["soap", "water", "mud", "mud", "water", "mud",

"vacuum cleaner"])