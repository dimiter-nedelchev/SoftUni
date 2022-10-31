function clock () {

    let minutes=0
    let hour=0

    let m=60
    

    for (i=0;i<m;++i) {
        if (minutes===0 && hour===0) {
            console.log (`${hour.toString()} : ${minutes.toString()}`)
        }
        minutes+= 1
        if (minutes===60) {
           hour += 1
           minutes= minutes-60
            m+= 60
        }
         if (hour>23) {
            hour-= 1
            break;
        }
        console.log (`${hour} : ${minutes}`)
    }
    
}
clock ()