function binaryToDecimal(num) {

    let binary=num.toString();
    let sum=0;

    let currentNum=0;

    for (let i=0;i<binary.length;i++) {

        currentNum=Number(binary[i]);

        if (i===binary.length-1) {
            sum+= currentNum
            break;
        }

        if (i===0) {
        sum+= (currentNum*2);
        }
        else {
            sum= (sum + currentNum)*2;
        }
    }
    console.log(sum);
}
binaryToDecimal(00001001);
//binaryToDecimal(11110000);
//binaryToDecimal(110);
