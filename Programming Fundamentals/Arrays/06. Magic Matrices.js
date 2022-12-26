function magicMatrices(arr) {

    let isMagic=false;
    let length=arr.length

  
    let rowValue=Number.MIN_SAFE_INTEGER
    let min=0;
    let sumColumn=0;
    let sum=0;
    let columnValue=0;
    let sum2=0;
    let magicColumn=true;
    let magicRow=true;

    for(let i=0;i<=length-1;i++) {
        sum2=sumColumn;
        if(i===1) {
         columnValue=sumColumn;
        }
        if(sum2!==columnValue) {
            magicColumn=false;
        }
        sumColumn=0;
        for(let j=0;j<=length-1;j++) {
            sumColumn+= arr[j][i] 
    }
    console.log(sumColumn)
    }

   if(sumColumn!==sum2) {
    magicColumn=false;
   }

    for(let i=0;i<=length-1;i++) {
        for (let number of arr[i]) {
            sum+= number;
        }
        if(sum>rowValue) {
            rowValue=sum;
        }
        else if(sum===rowValue) {
            min=sum;
        }
        else {
            magicRow=false;
            break;
        }
        sum=0;
    }

    if(magicColumn===true && magicRow===true && min===rowValue) {
        if(columnValue===rowValue){
        isMagic=true;
        }
    }
    
    console.log(isMagic)
}
magicMatrices([[4, 5, 5],[6, 5, 5],[5, 5, 5]]);