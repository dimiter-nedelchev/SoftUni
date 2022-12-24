function nonDecreasingSubset(arr) {

    let newArr=[];
    let length=Number(arr.length-1);
    let max=Number.MIN_SAFE_INTEGER;

    for(let index=0;index<=length;index++) {
        let currentNum=arr[index];

        if(currentNum>=max) {
            max=currentNum;
            newArr.push(currentNum);
        }
    }
    console.log(newArr.join(' '))
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);