function sortingNumbers(array){

    let sortedArray= array.sort((a,b) => a - b);
    let firstHalf= sortedArray.slice(0, sortedArray.length/2);
    let secondHalf= sortedArray.slice(sortedArray.length/2).reverse();
    
    let resultArray= [];

    for(let i=0; i <= firstHalf.length - 1; i++){
        resultArray.push(firstHalf[i], secondHalf[i]);
    }

    if(sortedArray.length % 2 !== 0){
        resultArray.push(secondHalf.pop())
    }
   return resultArray
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 49])