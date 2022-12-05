
function triangleNum(num) {

    total=""
    for (let i=1;i<=num;i++) {
        for (let j=1;j<=i;j++) {
            total+= `${i.toString()} `
        }
        console.log(total);
        total="";
    }
}
//triangleNum(3);
triangleNum(5);
//triangleNum(6);
