function partyTime(input){

    let vip= [];
    let regular= [];

    let command= input.shift();

    while(command !== 'PARTY'){
        const numRange= command.charCodeAt(0) >= 48 && command.charCodeAt(0) <= 57
        
        if(numRange){
            vip.push(command)
        }
        else{
            regular.push(command)
        }
        command= input.shift()
    }

    let all= vip.concat(regular)
    
    input.forEach(guest => {
        if(all.includes(guest)){
            all.splice(all.indexOf(guest), 1)
        }
    })
    
    console.log(all.length)
    for(const guest of all){
        console.log(guest)
    }

}
partyTime(['9NoBUajQ',
'Ce8vwPmE', 'SVQXQCbc', '7IK9Yo0h', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])