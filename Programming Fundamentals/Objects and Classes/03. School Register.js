function schoolRegister(input){

    let schoolRegistry= {}

    input.forEach(student => {
        const currentStudent= student.split(', ');
        const name= currentStudent[0].split('Student name: ').join('');
        const grade= Number(currentStudent[1].split('Grade: ').join('')) + 1;
        const averageScore= Number(currentStudent[2].split('Graduated with an average score: ').join(''));

        if(!schoolRegistry.hasOwnProperty(grade)){
            schoolRegistry[grade]= {
                students: [],
                averageGrade: 0
            }
        }

        if(averageScore >= 3.00){
            schoolRegistry[grade].students.push(name);
            schoolRegistry[grade].averageGrade+= averageScore;
        }
    })

    for(let grade in schoolRegistry){
        if(schoolRegistry[grade].students.length > 0){
        
        console.log(`${grade} Grade`)

        console.log(`List of students: ${schoolRegistry[grade].students.join(', ')}`)
        console.log(`Average annual score from last year: ${(schoolRegistry[grade].averageGrade/schoolRegistry[grade].students.length).toFixed(2)}`)
        console.log('')
        }
    }
}
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
    );