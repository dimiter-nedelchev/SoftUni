function smallestNumbers(input){

    let array= input.sort((a,b) => a - b)
    let smallestNumbers= array.slice(0,2);

    console.log(smallestNumbers.join(' '))

}
smallestNumbers([30, 15, 50, 5])