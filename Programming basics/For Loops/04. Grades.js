function grades (input) {

    let students=Number (input.shift ())
    let grade=0

    let poorP=0
    let satysfactoryP=0
    let goodP=0
    let verygoodP=0

    let poorN=0
    let satysfactoryN=0
    let goodN=0
    let verygoodN=0

    let total=0
    let average=0
    let averageTotal=0

    for (i=1;i<=students;i++) {
        grade=Number (input.shift())
        if (grade>=2 && grade<=2.99) {
            poorN+= 1
        }
        else if (grade>=3 && grade<=3.99) {
            satysfactoryN+= 1
        }
        else if (grade>=4 && grade<=4.99) {
            goodN+= 1
        }
        else {
            verygoodN+= 1
        }
        total+= 1
        average+= grade
    }
    averageTotal= average/total
    poorP= (poorN/total)*100
    satysfactoryP=(satysfactoryN/total)*100
    goodP=(goodN/total)*100
    verygoodP=(verygoodN/total)*100

    console.log (`Top students: ${verygoodP.toFixed(2)}%`)
    console.log (`Between 4.00 and 4.99: ${goodP.toFixed(2)}% `)
    console.log (`Between 3.00 and 3.99: ${satysfactoryP.toFixed(2)}%`)
    console.log (`Fail: ${poorP.toFixed(2)}%`)
    console.log (`Average: ${averageTotal.toFixed(2)}`)

}
grades (["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44", "5"])
//grades (["6","2","3","4","5","6","2.2"])