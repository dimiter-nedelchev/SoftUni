function minerTask(input){

    let resources= {};
    const length= input.length -1;

    for(let i=0;i<=length;i+= 2){
        const resource= input[i];
        const quantity= Number(input[i+1]);

        if(resources[resource]){
            resources[resource]+= quantity;
        }
        else{
            resources[resource]= quantity;
        }
    }
    
    for(const [resource,quantity] of Object.entries(resources)){
        console.log(`${resource} -> ${quantity}`)
    }

}
minerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);