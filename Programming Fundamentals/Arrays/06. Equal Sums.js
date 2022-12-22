function equalSums(arr) {

    let leftSum=0;
    let rightSum=0;
    let isFound=false;
    for (let i=0;i<=arr.length-1;i++) {

        if(i===0) {
            leftSum=0;
        }
        else {
            leftSum+= arr[i-1] 
        }
        if(i===arr.length-1) {
            rightSum=0;
        }

        for(let j=i+1;j<=arr.length-1;j++) {
            rightSum+= arr[j] 
        }

        if(rightSum===leftSum) {
            console.log(i);
            isFound=true;
            rightSum=0;
        }
        else {
            rightSum=0;
        }
    }
    if(isFound===false && arr.length>1){
        console.log("no")
    }
    
}
//equalSums([1, 2, 3, 3])
equalSums([1, 2])
//equalSums([1])
equalSums([1, 2, 3])
//equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])