function treasureHunt(arr){

    let chest= arr.shift().split('|');
    let commands= [];
    let loot='';
    let position= 0;
    let count= 0;
    let length= arr.length-1;
    let index= 0;
    let command=''
    let chestLength= chest.length-1
    let temp= ''

    for(let i=0;i<=length;i++){
        commands= arr[index++].split(' ')
        command= commands[0];

        if(command === 'Yohoho!'){
            break;
        }
        else if(command === 'Loot'){
            for(let i=1;i<=commands.length-1;i++){
                loot= commands[i]
                if(!chest.includes(loot)){
                    chest.unshift(loot);
                }
            }
        }
        else if(command === 'Drop'){
            position= Number(commands[1]);

            if(typeof chest[position] == 'string'){
                 temp= chest[position]
                chest.splice(position,1)
                chest.push(temp)
            }
        }
        else{
            count= Number(commands[1]);
            let quantity= chest.length - count
            
            if(quantity < 0) {
                quantity= 0;
            }
            let stolenItems= chest.splice(quantity, count)
            console.log(stolenItems.join(', '))
        }
    }
    
    let bounty= chest.map(x => x.length)
    let sum=0;

    for(let el of bounty){
        sum+= el
    }

    if(sum > 0){
        console.log(`Average treasure gain: ${(sum/chest.length).toFixed(2)} pirate credits.`)
    }
    else{
        console.log(`Failed treasure hunt.`)
    }
}
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
);
//treasureHunt();