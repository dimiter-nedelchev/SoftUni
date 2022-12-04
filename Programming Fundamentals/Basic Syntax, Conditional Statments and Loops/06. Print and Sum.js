function printSum(num1,num2) {

    sum=0;
    total="";

    for(let i=num1;i<=num2;i++) {
        sum+= i;
        total+= `${i.toString()} `
        
    }
    console.log(`${total}`)
    console.log(`Sum: ${sum}`)
}
printSum(5,10);
printSum(0,26);
printSum(50,60);