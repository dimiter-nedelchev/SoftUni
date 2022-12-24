function rotateArray(arr) {

    let newArr=[];

    let rotation=Number(arr[arr.length-1]);
    let tempElement='';
    for(let i=rotation;i>0;i--) {
        tempElement=arr[arr.length-2];
        for(let j=arr.length-2;j>=1;j--) {
            arr[j]=arr[j-1]
        }
        arr[0]=tempElement;
    }
    
    for(let i=0;i<=arr.length-2;i++) {
        newArr[i]=arr[i]
    }

    console.log(newArr.join(' '))
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15'])