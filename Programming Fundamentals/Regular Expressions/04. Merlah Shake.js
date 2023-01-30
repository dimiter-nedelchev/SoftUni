function merlahShake(input){

    let string= input[0];
    let pattern= input[1];
    
    while(pattern.length > 0){
        const firstMatch= string.indexOf(pattern); 
        const lastMatch= string.lastIndexOf(pattern);
        const length= pattern.length 

        if(firstMatch >= 0 && lastMatch >= 0 && firstMatch !== lastMatch){
            const firstPart= string.substring(0, firstMatch);
            const secondPart= string.substring(firstMatch + length, lastMatch);
            const lastPart= string.substring(lastMatch + length);
            string= firstPart + secondPart + lastPart;

            console.log('Shaked it.')
            
            let index= Math.floor(pattern.length/2)
            pattern= pattern.split('')
            pattern.splice(index,1)
            pattern= pattern.join('')

        }
        else{
            break;
        }
    }
            console.log('No shake.');
            console.log(string);
}
merlahShake(['##mtm!!mm.mm*mtm.#',
'mtm']
)