function lastKNumber(n, k){

    const sequenceLength= n;
    const sequence= k;

    let newArray= [1];

    for(let i= 1; i < sequenceLength; i++){
      let sum= newArray.reduce((total, current, index, array) => {
            if(array.length <= sequence){
             return total+= current;
            }
            else if(index === array.length - 1){
                for(let i= 0; i < sequence; i++ ){
                   total+= array[array.length - 1 - i]
                }
                return total
            }
            else{
                return total
            }
        }, 0)
        newArray.push(sum)
    }
    return newArray
}
lastKNumber(8,2)