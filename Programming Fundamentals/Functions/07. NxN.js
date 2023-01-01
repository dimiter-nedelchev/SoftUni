function NxN(num){

    let matrix=[];

    for(i=0;i<num;i++) matrix[i]=[];{
        for(let j=0;j<=matrix.length-1;j++){
            for(let k=0;k<=matrix.length-1;k++){
                matrix[j][k]=num;
            }
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
NxN(3)