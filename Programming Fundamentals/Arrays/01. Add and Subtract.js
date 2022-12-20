function addAndSubtract(arr) {

    let originalSum=0;
    let newSum=0;

    for(let number of arr) {

        originalSum+= number;
    }
    
    for(let i=0;i<=arr.length-1;i++) {

        if(arr[i]%2===0) {
            arr[i]+= i;
        }
        else {
            arr[i]-= i;
        }
    }

    for(let number of arr) {
        newSum+= number;
    }
    console.log(arr);
    console.log(originalSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);

