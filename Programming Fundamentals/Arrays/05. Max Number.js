function maxNumber(arr) {

    let sum='';
    let isFound=false;
    let newArr=[]

    for(let i=0;i<=arr.length-1;i++) {
            for(let j=i+1;j<arr.length;j++) {
                if(arr[i]<=arr[j]) {
                    break;
                }
                if (j===arr.length-1) {
                    if(arr[i]>arr[j]) {
                        newArr.push(arr[i]);
                    }
                }
            }   
    }
    newArr.push(arr[arr.length-1]);
    console.log(newArr.join(' '))
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);