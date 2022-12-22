function sequelElements(arr) {

    let newArr=[];
    let maxArr=[];

    for(let i=0;i<=arr.length-1;i++) {

        if(arr[i]===arr[i+1]) {
            newArr.push(arr[i]);
        }
        else {
            if(arr[i]===arr[i-1]) {
            newArr.push(arr[i]);
            }
            if(newArr.length>maxArr.length) {
            maxArr=newArr;
            newArr=[];
        }    
        newArr=[];
    }
}
 console.log(maxArr.join(' '))

}
sequelElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
sequelElements([1, 1, 1, 2, 3, 1, 3, 3]);
sequelElements([4, 4, 4, 4]);
sequelElements([0, 1, 1, 5, 2, 2, 6, 3, 3])