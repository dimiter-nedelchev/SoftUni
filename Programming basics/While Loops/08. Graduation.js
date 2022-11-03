function averageGrade (input) {

    let name= input [0]
    let index=1
    let grade=0

    let clas=0
    let average=0
    let averageGr=0
    let excluded=0

    while (clas<12) {
        grade=Number (input[index++])
        clas+= 1
        if (grade<4.00) {
            clas-= 1
            excluded+= 1
            continue;
        }
        else {
            average+= grade
        }
        if (excluded>=2) {
            console.log (`${name} has been excluded at ${clas} grade`)
            break;
        }
    }
    if (excluded<2) {
        averageGr=average/clas
        console.log (`${name} graduated. Average grade: ${averageGr.toFixed(2)}`)
    }
}
averageGrade (["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
//averageGrade (["Mimi", "5", "6", "5", "6", "5", "6", "6","2", "3"])