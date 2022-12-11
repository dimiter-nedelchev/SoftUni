function sumDigits(num){

    number=num.toString();

    let sum=0;

    for (let i=0;i<number.length;i++) {

        sum+= Number(number[i]);
    }
    console.log(sum)
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);