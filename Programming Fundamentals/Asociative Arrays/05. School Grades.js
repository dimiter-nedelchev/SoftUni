function schoolGrades(input){

    let gradeBook= {};
    let avgGrade= 0;
    let counter= 0;

    input.forEach(student => {
        const students= student.split(' ');
        const studentName= students.shift();
        const grades= students.join(' ')

        if(gradeBook[studentName]){
            gradeBook[studentName]+= ` ${grades}`
        }
        else{
            gradeBook[studentName]= grades;
        }
    })

    
    for(let student in gradeBook){

        let yearGrades= gradeBook[student]
        yearGrades= yearGrades.split(' ')

        for(let grade of yearGrades){
            avgGrade+= Number(grade)
            counter+= 1
        }

        gradeBook[student]= ((avgGrade)/counter).toFixed(2);
        avgGrade= 0;
        counter= 0;
    }

    let finalGrades= Object.entries(gradeBook)
    finalGrades.sort((a,b) => (a[0]).localeCompare(b[0]))

    for(const grade of finalGrades){
        console.log(`${grade[0]}: ${grade[1]}`)
    }
}
schoolGrades(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3'])