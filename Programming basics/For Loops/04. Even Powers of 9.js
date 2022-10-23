function stepeni (input) {

    let num=Number (input[0])
    let sum=1

    for (i=0;i<=num;i+=2) {
        console.log (sum)
        sum=sum*2*2
    }
}
stepeni (["10"])