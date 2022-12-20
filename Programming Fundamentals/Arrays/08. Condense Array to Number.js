function condenseArray(numbers) {

    let newArr=[];
    let sum=0;
    let isFound=false;

    for (let i=numbers.length-1;i>0;i--) {
        
        for (let j=0;j<i;j++) {
            sum=numbers[j] + numbers[j+1];
            numbers[j]=sum
        }
    }
    if (numbers.length===1) {
        console.log(numbers[0]);
    }
    else {
    console.log(sum)
    }
}
//condenseArray([2,10,3])
//condenseArray([5,0,4,1,2])
condenseArray([6])