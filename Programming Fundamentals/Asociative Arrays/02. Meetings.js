function meetings(input){

    let schedule= {}

    for(let el of input){
        const [day, name] = el.split(' ')

        if(schedule[day]){
            console.log(`Conflict on ${day}!`)
        }
        else{
            console.log(`Scheduled for ${day}`)
            schedule[day] = name
        }
    }

    for(const name in schedule){
        console.log(`${name} -> ${schedule[name]}`)
    }
}
meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);
