function movieTickets(input) {

    let a1=Number(input[0]);
    let a2=Number(input[1]);
    let n=Number(input[2]);

    let total="";
    let char1="";

    for (let i=a1;i<=a2-1;i++) {
        for (let j=1;j<=n-1;j++) {
            for (let k=1;k<=(n/2)-1;k++) {
                if (i%2!==0 && (i+j+k)%2!==0) {
                    total+= `${String.fromCharCode(i)}-${j}${k}${i} \n`
                }
            }
        }
    }
    console.log(total)
}
//movieTickets (["86","88","4"])
//movieTickets (["71","74","6"])
movieTickets (["69","72","4 "])
