function reverseArray(num,numArr) {

    let newArr=[];
    
   for (let i=0;i<num;i++) {

        newArr[i]=numArr[i]
   }

    for (let i=0;i<newArr.length/2;i++) {
        
        let tempElement=newArr[i]
        newArr[i]=newArr[newArr.length-1-i]
        newArr[newArr.length-1-i] = tempElement
    }
    let result=newArr.join(' ')

    console.log(result)
}
reverseArray(3, [10, 20, 30, 40, 50])
reverseArray(4, [-1, 20, 99, 5])
reverseArray(2, [66, 43, 75, 89, 47])