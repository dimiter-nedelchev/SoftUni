function multiplicationTable () {

    let result=0

    for (i=1;i<=10;i++) {
        for (j=1;j<=10;j++) {
            result=i*j

            console.log (`${i} * ${j} = ${result}`)
        }
    }
}
multiplicationTable()