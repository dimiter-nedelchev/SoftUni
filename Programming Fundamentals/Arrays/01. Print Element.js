function printElement(arr){

    let step=Number(arr[arr.length-1]);
    let length=Number(arr.length-2);
    let newArr=[];

    for(let index=0;index<=length;index+=step) {
        newArr.push(arr[index]);
    }
    console.log(newArr.join(' '))
}
printElement(['5', '20', '31', '4', '20', '2'])
printElement(['dsa', 'asd', 'test', 'test', '2'])
printElement(['1', '2', '3', '4', '5', '6'])