function amazingNumbers(num) {

    let number=num.toString();
    let sum=0;
    let isFound=false;

    for (let i=0;i<number.length;i++) {
        sum+= Number(number[i]);
    }

    sum=sum.toString();

    for (let j=0;j<sum.length;j++) {

        if(sum[j]==='9') {
            console.log(`${num} Amazing? True`);
            isFound=true;
            break;
        }
    }

    if (isFound===false) {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233);
amazingNumbers(999);