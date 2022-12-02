function sumOdd(odd) {

    let sum=0;
    let counter=0;

    for (let i=1;i<=1000;i++) {
        
        if(i%2!==0) {
            sum+= i;
            counter+= 1;
            console.log(i);
            if(counter===odd) {
            console.log(`Sum: ${sum}`);
            break;
            }
        }
        
    }
}
sumOdd(5)
sumOdd(3)