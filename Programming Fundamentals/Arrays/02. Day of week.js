function dayOfWeek(num){

    let number=num;
    let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    let day=week[number-1]

    if (number<1 || number>7) {
        console.log('Invalid day!')
    }
    else {
        console.log(day)
    }

}
dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)