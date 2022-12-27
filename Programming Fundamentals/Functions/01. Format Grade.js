function formatGrade(grade) {
  
    function nameGrade(grade) {
        let name=''
        if(grade<3){
            name='Fail';
        }
        else if(grade<3.5) {
            name='Poor';
        }
        else if(grade<4.5){
            name='Good';
        }
        else if(grade<5.5){
            name='Very good'
        }
        else if(grade>=5.5 && grade<=6){
            name='Excellent'
        }
        return name;
    }

    if(grade<3){
        console.log(`${nameGrade(grade)} (2)`)
    }
    else {
        console.log(`${nameGrade(grade)} (${grade.toFixed(2)})`)
    }
}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);