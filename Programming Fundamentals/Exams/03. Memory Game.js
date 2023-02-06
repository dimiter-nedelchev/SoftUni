function memoryGame(arr){

    let sequence= arr.shift().split(' ');
    let turns=0;
    let index=0;
    let command='';
    let commands=[]

    while(command !== 'end') {
        commands= arr[index++].split(' ')
        command=commands[0];
        let index1= Number(commands[0]);
        let index2= Number(commands[1]);
        let length= sequence.length-1
        let middle= Math.floor(sequence.length)/2

        if(command === 'end') {
            console.log(`Sorry you lose :(`)
            console.log(`${sequence.join(' ')}`)
            break;
        }

        turns+= 1;

        if(index1 < 0 || index1 > length || index2 > length || index2 < 0 || index1 === index2) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let newElement= `-${turns}a`
            sequence.splice(middle,0,newElement, newElement)
        } 
        else{
            if(sequence[index1] === sequence [index2]) {
                console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
                let element= sequence[index1]
                sequence= sequence.filter(x => x !== element)
            }
            else {
                console.log(`Try again!`)
            }
        }
        
        if(sequence.length<1) {
            console.log(`You have won in ${turns} turns!`)
            break;
        }
    }

}
memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"]);
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    );