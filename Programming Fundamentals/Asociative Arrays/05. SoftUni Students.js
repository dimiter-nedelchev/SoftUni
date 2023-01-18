function softUniStudents(input){

    let courses= {};

    input.forEach(command => {
        if(command.includes(':')){
            let [course, capacity]= command.split(': ');
            capacity= Number(capacity);

            if(!courses.hasOwnProperty(course)){
                courses[course]= {};
                courses[course].capacity= capacity;
                courses[course].students= 0;
            }
            else {
                courses[course].capacity+= capacity;
            }
        }
        else{
            let [studentInfo, studentCourse]= command.split(' joins ');

            if(courses.hasOwnProperty(studentCourse)){
                if(courses[studentCourse].capacity > 0){
                    courses[studentCourse].capacity-= 1;
                    courses[studentCourse].students+= 1

                    let [student, email]= studentInfo.split(' with email ');
                    let [user, credits]= student.split('[')
                    credits= Number(credits.split(']').join(''))
                    let userEmail= user.concat(`, ${email}`)
                    
                    courses[studentCourse][credits]= userEmail
                }
            }
        }
    })

    let sortedCourses= Object.entries(courses).sort((a, b) => (b[1].students) - (a[1].students))

    for(let course of sortedCourses){
        console.log(`${course[0]}: ${course[1].capacity} places left`);

        delete course[1].capacity;
        delete course[1].students;

        let sortCredits= Object.entries(course[1]).sort((a, b) => b[0] - a[0])

        for(let student of sortCredits){
            console.log(`--- ${student[0]}: ${student[1]}`)
        }
    }
}
softUniStudents(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore']
);