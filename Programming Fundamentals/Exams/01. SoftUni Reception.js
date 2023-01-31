function reception(arr){

    const studentsPerHour= Number(arr[0]) + Number(arr[1]) + Number(arr[2])
    let studentCount= Number(arr[3])

    let time= 0;

    while(studentCount>0){
        time+= 1;

        if(time % 4 === 0){
            time+= 1
            studentCount-= studentsPerHour;
        }
        else{
            studentCount-= studentsPerHour;
        }
    }
    console.log(`Time needed: ${time}h.`)
}
reception(['5','6','4','20']);
reception(['1','2','3','45']);
reception(['3','2','5','40']);