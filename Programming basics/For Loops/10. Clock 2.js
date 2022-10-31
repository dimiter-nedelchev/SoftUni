function clock2 () {

    let minutes=0
    let hour=0
    let seconds=0

    let s=60
    

    for (i=0;i<s;++i) {
        if (minutes===0 && hour===0 && seconds===0) {
            console.log (`${hour} : ${minutes} : ${seconds}`)
        }
        seconds+= 1

        if (seconds===60) {
            minutes+= 1
            seconds= seconds - 60
            s+= 60
        }
        if (minutes===60) {
           hour += 1
           minutes= minutes-60
           
        }
         if (hour>23) {
            hour-= 1
            break;
        }
        console.log (`${hour} : ${minutes} : ${seconds}`)
    }
    
}
clock2 ()