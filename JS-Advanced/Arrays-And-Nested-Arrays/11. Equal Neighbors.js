function equalNeighbors(input){

    const rows= input.length - 1;
    const cols= input[0].length - 1;
    let count= 0; 

    for(let i= 0; i <= rows; i++){
        for(let j= 0; j <= cols; j++){
            if(i === rows){
                if(j !== cols){
                if(input[i][j] === input[i][j + 1]){
                    count++
                }
            }
            }
            else{
                if(j === cols){
                    if(input[i][j] === input[i + 1][j]){
                        count++
                    }
                }
                else{
                    if(input[i][j] === input[i][j + 1]){
                        count++
                    }
                    if(input[i][j] === input[i + 1][j]){
                        count++
                    }
                }
            }
        }
    }
    console.log(count)
}
equalNeighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]);