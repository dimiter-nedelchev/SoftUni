function fancyBarCodes(input){

    const pattern= /([@][#]+)(?<product>[A-Z][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9]+[A-Z])[@][#]+/g
    const count= Number(input[0]);
    let foundDigit= false;
    let group='';

    for(i= 1; i <= count; i++){
        const string= input[i];

        let barcode= pattern.exec(string);

        if(barcode){
        while(barcode){
            let product= barcode.groups['product'];

            for(let j= 0; j <= product.length - 1; j++){

                let isDigit= product[j].charCodeAt() >= 48 && product[j].charCodeAt() <= 57;

                if(isDigit){
                    group+= product[j];
                    foundDigit= true;
                }
            }
            if(foundDigit){
                console.log(`Product group: ${group}`);
                group='';
                foundDigit= false;
            }
            else{
                console.log(`Product group: 00`)
            }
            barcode= pattern.exec(string);
        }
    }
    else{
        console.log('Invalid barcode')
    }
    } 
}
fancyBarCodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]
);