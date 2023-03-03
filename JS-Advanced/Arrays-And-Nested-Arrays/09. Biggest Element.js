function biggestElement(input){

    let max= Number.MIN_SAFE_INTEGER;
    const rowLength= input.length - 1;
    const colLength= input[0].length - 1;

    for(let i= 0; i <= rowLength; i++){
        for(let j= 0; j <= colLength; j++){
            let currentEl= input[i][j];
            if(currentEl > max){
                max= currentEl;
            }
        }
    }
    return max;
}
biggestElement([[20, 50, 10],
                [8, 33, 145]])