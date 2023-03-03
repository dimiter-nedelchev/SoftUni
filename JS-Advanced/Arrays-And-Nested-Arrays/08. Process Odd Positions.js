function processOddPositions(input){

    let array= input.filter((x, i) => i % 2 !== 0)
    .map(x => x*2)
    .reverse()
    .join(' ');

    return array;
}
processOddPositions([3, 0, 10, 4, 7, 3])