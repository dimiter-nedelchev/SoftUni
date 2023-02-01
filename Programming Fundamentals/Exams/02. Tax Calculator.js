function taxCalculator(arr){
    
    let index= 0;
    let cars= arr[0].split('>>')
    let commands= [];
    let type='';
    let years=0;
    let km=0;
    let totalTax=0;
    let carTax=0;
    let length= cars.length-1
    let yearTax=0;
    let kmTax=0;

    for(let i=0;i<=length;i++){
        commands= cars[index++].split(' ');
        type= commands[0];
        years= Number(commands[1]);
        km= Number(commands[2]);

        if(type === 'family'){
            carTax= 50

            yearTax= years*5
            kmTax= Math.trunc(km / 3000) * 12
            carTax= (carTax - yearTax) + kmTax
            totalTax+= carTax

            console.log(`A ${type} car will pay ${carTax.toFixed(2)} euros in taxes.`)
        }
        else if(type === 'heavyDuty'){
            carTax= 80

            yearTax= years*8;
            kmTax= Math.trunc(km / 9000)*14;
            carTax= (carTax - yearTax) + kmTax;
            totalTax+= carTax

            console.log(`A ${type} car will pay ${carTax.toFixed(2)} euros in taxes.`)
        }
        else if(type === 'sports'){
            carTax= 100;

            yearTax= years*9;
            kmTax= Math.trunc(km / 2000)*18
            carTax= (carTax - yearTax) + kmTax;
            totalTax+= carTax

            console.log(`A ${type} car will pay ${carTax.toFixed(2)} euros in taxes.`)
        }
        else{
            console.log(`Invalid car type.`);
            continue
        }
    }

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`)
}
//taxCalculator([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);
taxCalculator(([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]));
