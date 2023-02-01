function shootToWin(arr){



    let targets= arr.shift().split(' ').map(Number)
    let command='';
    let index= 0;
    let length= arr.length-1;
    let shots= 0;
    let value= 0;
    

    for(let i=0;i<=length;i++){

        command= arr[index++]
        position= Number(command)
        

        if(command === 'End'){
            console.log(`Shot targets: ${shots} -> ${targets.join(' ')}`)
        }
        else if (typeof targets[position] == 'number' && !(targets[position] === -1) ){
            value= targets[position]
            targets[position]= -1
            shots+= 1

            for(let j=0;j<=targets.length-1;j++){
                if(targets[j] <= value && targets[j] !== -1){
                    targets[j]+= value
                }
                else if (targets[j] > value && targets[j] !== -1){
                    targets[j]-= value
                }
            }
        }
    }

}
shootToWin((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
);
shootToWin((["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
);