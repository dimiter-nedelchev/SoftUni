function negativePositiveNums(input){

    let newArray=  []

    for (let num of input){
        if(num < 0){
            newArray.unshift(num);
        }
        else{
            newArray.push(num)
        }
    }
    console.log(newArray.join('\n'))
}
negativePositiveNums([7, -2, 8, 9]);