function cookingMasterClass(arr){

    let budget= Number(arr[0])
    const students= Number(arr[1]);
    const flourPr= Number(arr[2]);
    const eggPr= Number(arr[3]);
    const apronPr= Number(arr[4]);

    const cartonPr= eggPr*10;
    

    let totalSum=0;

    for(let i=1;i<=students;i++){

        if (i % 5 === 0){
            totalSum+= cartonPr+apronPr;
        }
        else{
            totalSum+= cartonPr+apronPr+flourPr;
        }
    }

    totalSum+= apronPr*(Math.ceil(students*0.2));

    if(totalSum <= budget) {
        console.log(`Items purchased for ${totalSum.toFixed(2)}$.`)
    }
    else{
        console.log(`${(totalSum - budget).toFixed(2)}$ more needed.`)
    }
}
cookingMasterClass(([50,
    2,
    1.0,
    0.10,
    10.0])
    );
cookingMasterClass(([100,
    25,
    4.0,
    1.0,
    6.0])
    );
cookingMasterClass(([946, 
    20, 
    12.05, 
    0.42, 
    27.89]) 
    )