function juiceFlavors(juiceFlavors){

    let juiceBottles= new Map();
    let juices= {};

    juiceFlavors.forEach(juice => {
        let [flavor, quantity]= juice.split(' => ');

        if(!juices.hasOwnProperty(flavor)){
            juices[flavor]= Number(quantity);
            if(juices[flavor] >= 1000){
                let bottles= Math.floor(juices[flavor] / 1000);
                juiceBottles.set(flavor, bottles);
            }
        }
        else{
            juices[flavor]+= Number(quantity);
            if(juices[flavor] >= 1000){
                let bottles= Math.floor(juices[flavor] / 1000);
                juiceBottles.set(flavor, bottles);
            }
        }
    });
    
    let sortedJuices= Array.from(juiceBottles);
    for (let [key, value] of sortedJuices){
        console.log(`${key} => ${value}`)
    }
}
juiceFlavors(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])