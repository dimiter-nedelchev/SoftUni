function movingTarget(arr){

    let sequence= arr.shift().split(' ').map(Number);
    let length= arr.length-1
    let index= 0;

    for(let i=0;i<=length;i++) {
        const commands= arr[index++].split(' ');
        const command= commands[0];
        const position= Number(commands[1]);
        let power= 0;
        let radius= 0;
        let value= 0;

        let isFound= typeof sequence[position] == 'number'
        
        let first= 0;
        let last= sequence.length-1;
        
        if(command === 'End') {
            console.log(sequence.join('|'))
            break;
        }
        else if(command === 'Shoot' && isFound){
            power= Number(commands[2]);
            sequence[position]-= power;

            if(sequence[position] <= 0) {
                sequence.splice(position,1)
            }
        }
        else if(command === 'Add') {
           if(isFound){
            value= Number(commands[2]);
            sequence.splice(position,0,value)
           }
           else{
            console.log(`Invalid placement!`)
           }
        }
        else if(command === 'Strike') {
            radius= Number(commands[2])
            const start= position - radius
            const els= (radius*2) + 1
            if(position - radius >= first && position + radius <= last && isFound) {
                sequence.splice(start,els)
            }
            else{
                console.log('Strike missed!')
            }
        }
    }
}
movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
);
movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"])
);