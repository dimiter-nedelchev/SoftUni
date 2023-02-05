function heartDelivery(arr){

    let index= 0;
    let neighborhood= arr.shift().split('@').map(Number)
    let command='';
    let position= 0;
    let commands=[];
    let jump= 0;

    let neighborhoodLength= neighborhood.length-1;
    let length= arr.length-1;

    let currentPos= 0;

    for(let i=0;i<=length;i++){
        commands= arr[index++].split(' ');
        command= commands[0];
        position= Number(commands[1]);

        if(command === 'Love!'){
            console.log(`Cupid's last position was ${jump}.`)
            break;
        }

        jump+= position

        if(jump <= neighborhoodLength){
            currentPos = neighborhood[jump]

            if(currentPos === 0){
                console.log(`Place ${jump} already had Valentine's day.`)
            }
            else{
                neighborhood[jump] -= 2

                if(neighborhood[jump] === 0) {
                    console.log(`Place ${jump} has Valentine's day.`)
                }
            } 
        }
        else{
            jump= 0;
            currentPos = neighborhood[jump]

            if(currentPos === 0){
                console.log(`Place ${jump} already had Valentine's day.`)
            }
            else{
                neighborhood[jump] -= 2

                if(neighborhood[jump] === 0){
                    console.log(`Place ${jump} has Valentine's day.`)
                }
            }
        }
    }

    let houseCount= 0;

    for(let el of neighborhood){
        if(el > 0) {
            houseCount+= 1
        }
    }

    if(houseCount > 0) {
        console.log(`Cupid has failed ${houseCount} places.`)
    }
    else{
        console.log(`Mission was successful.`)
    }
}
//heartDelivery(["10@10@10@2","Jump 1","Jump 2","Love!"]);
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
