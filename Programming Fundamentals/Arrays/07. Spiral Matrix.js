function spiralMatrix(num1, num2){

    let area=num1*num2;

    let matrix=[];

    for(let r=0;r<num1;r++) matrix[r] = [];

    let [counter, minRow,maxRow,minCol,maxCol] = [0,0,num1-1,0,num1-1]
    while(counter<=area) {
    for (let i=minCol;i<=maxCol;i++ && counter<=area) matrix[minRow][i]= ++counter
    minRow++
    for(let j=minRow;j<=maxRow;j++ && counter<=area) matrix[j][maxCol] = ++counter
    maxCol--
    for(let k=maxCol;k>=minCol;k-- && counter<=area) matrix[maxRow][k] = ++counter
    maxRow--
    for (let l=maxRow;l>=minRow;l-- && counter<=area) matrix[l][minCol] = ++counter
    minCol++
        if(counter===area) {
            break;
        }
    }
    
    matrix.forEach(rows => console.log (rows.join(' ')))
}
spiralMatrix(3,3)