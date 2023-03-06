function diagonalSums(input){

    const rowLength= input.length - 1;
    let minCol= 0;
    let maxCol= input[0].length - 1;

    let leftDiagonal= 0;
    let rightDiagonal= 0;

    for(let i= 0; i <= rowLength; i++){
        leftDiagonal+= input[i][minCol];
        rightDiagonal+= input[i][maxCol];

        minCol++
        maxCol--
    }

    const totalSum= [leftDiagonal, rightDiagonal].join(' ');
    console.log(totalSum)
}
diagonalSums([[20, 40],
            [10, 60]]);