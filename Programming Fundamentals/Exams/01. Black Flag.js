function piratePlunder(arr){

    
    let totalPlunder= 0;
    let dailyPlunder= Number(arr[1]);
    let length= Number(arr[0]);
    let targetPlunder= Number(arr[2]);

    for(let i=1;i<=length;i++){

        if(i % 3 === 0){
            totalPlunder+= (dailyPlunder*1.5)
            if(i % 5 === 0) {
                totalPlunder*= 0.7
            }
        }
        else if(i % 5 === 0){
            totalPlunder+= dailyPlunder;
            totalPlunder*= 0.7;
        }
        
        else{
            totalPlunder+= dailyPlunder;
        }
    }
    if(totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
    else{
        console.log(`Collected only ${((totalPlunder/targetPlunder)*100).toFixed(2)}% of the plunder.`)
    }
}
piratePlunder((["5",
"40",
"100"])
);
piratePlunder((["10",
"20",
"380"])
);