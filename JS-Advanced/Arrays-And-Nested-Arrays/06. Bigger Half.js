function biggerHalf(input){

    let array= input.sort((a,b) => a - b)
    const biggerHalf= array.slice(array.length/2)

    return biggerHalf
}
biggerHalf([3, 19, 14, 7, 2, 19, 6])