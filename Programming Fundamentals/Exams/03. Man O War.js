function manOwar(arr){

    let index= 0;
    let pirateShip= arr.shift().split('>').map(Number);
    let warShip= arr.shift().split('>').map(Number);
    const maxHp= Number(arr[index++]);
    const critical= 0.2*maxHp

    let commands= [];
    let command= '';
    let position= 0;
    let start= 0;
    let end= 0;
    let count= 0;
    let length= arr.length-1;
    let damage= 0;
    let repairs= 0;
    let isLost= false;

    let warshipSum= 0;
    let pirateShipSum= 0;

    for(let i=0;i<=length;i++){
        commands= arr[index++].split(' ');
        command= commands[0];

        if(command === 'Retire'){

            for(let el of warShip){
                warshipSum+= el;
            }
            for(let el of pirateShip){
                pirateShipSum+= el;
            }
            
            console.log(`Pirate ship status: ${pirateShipSum} \n Warship status: ${warshipSum}`)
            break;
        }
        else if(command === 'Fire'){
            position= Number(commands[1]);
            damage= Number(commands[2]);

            if(typeof warShip[position] == 'number'){
                warShip[position]-= damage;

                if(warShip[position] <= 0){
                    console.log(`You won! The enemy ship has sunken.`)
                    break;
                }
            }
        }

        else if(command === 'Defend'){
            start= Number(commands[1]);
            end= Number(commands[2]);
            damage= Number(commands[3]);

            let isValid= start >= 0 && end <= pirateShip.length-1

            if(isValid){
                for(let j=start;j<=end;j++){
                    pirateShip[j]-= damage;

                    if(pirateShip[j] <= 0){
                        console.log(`You lost! The pirate ship has sunken.`)
                        isLost= true;
                        break;
                    }
                }
                if(isLost){
                    break;
                }
            }
        }
        else if(command === 'Repair'){
            position= Number(commands[1]);
            repairs= Number(commands[2]);

            if(typeof pirateShip[position] == 'number' ) {
                pirateShip[position] += repairs;

                if(pirateShip[position] > maxHp){
                    pirateShip[position]= maxHp;
                }
            }
        }
        else{
            for(let el of pirateShip){
                if(el < critical){
                    count+= 1;
                }
            }
            console.log(`${count} sections need repair.`)
            count= 0;
        }
    }
}
manOwar((["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 70",
"Status",
"Retire"])
);
manOwar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
);