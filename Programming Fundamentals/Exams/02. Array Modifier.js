function arrayModifier(arr){

    let index= 0;
    let sequence= arr.shift().split(' ').map(Number)

    let commands= [];
    let command= ''
    let index1= 0;
    let index2= 0;
    let sum= 0;

    let length= arr.length-1

    for(let i=0;i<=length;i++){
        commands= arr[index++].split(' ');
        command= commands[0];

        if(command === 'end'){
            console.log(sequence.join(', '))
            break;
        }
        else if(command === 'swap'){
            index1= Number(commands[1]);
            index2= Number(commands[2]);

            let temp= sequence[index1]

            sequence[index1] = sequence[index2]
            sequence[index2] = temp;
        }
        else if(command === 'multiply'){
            index1= Number(commands[1]);
            index2= Number(commands[2]);
            let position= Number(index1)

            sum= sequence[index1] * sequence[index2]
            sequence.splice(position,1,sum)
            sum= 0;
        }
        else{
           sequence= sequence.map(x => x - 1)
        }
    }
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  );
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  );