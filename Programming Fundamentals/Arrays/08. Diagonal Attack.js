function diagonalAttack(arr) {

    let sumLeft=0;
    let sumRight=0;
    
    let newArr=arr.map(row=> row.split(' ').map(Number))

    let rowLength=newArr[0].length-1;
    let rowIncrement=0
        
    for(i=0;i<=rowLength;i++) {
            sumLeft+= newArr[i][i]
        }
        for(j=rowLength;j>=0;j--) {
            sumRight+= newArr[j][rowIncrement]
            rowIncrement++
        }
    

   if(sumLeft===sumRight) {
    for(let i=0;i<=rowLength;i++) {
            for(let j=0;j<=rowLength;j++) {
                if(i!=j && j!=newArr[0].length-1-i) {
                newArr[i][j]=sumLeft;
                }
            }
    }
    for(i=0;i<newArr.length;i++) {
        console.log(newArr[i].join(' '))
}
}

else  {
    for(i=0;i<newArr.length;i++) {
        console.log(newArr[i].join(' '))
    }
}

}
//diagonalAttack(['5 3 12 3 1','11 4 23 2 5','101 12 3 21 10','1 4 5 2 2','5 22 33 11 1'])
diagonalAttack(['1 1 1',
                '1 1 1',
                '1 1 0'])
