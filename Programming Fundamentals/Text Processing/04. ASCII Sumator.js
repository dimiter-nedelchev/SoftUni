function asciiSumator(input){

    const firstChar= input[0].toString();
    const lastChar= input[1].toString();
    const string= input[2];
    const length= string.length - 1;

    const firstIndex= firstChar.charCodeAt();
    const lastIndex= lastChar.charCodeAt();

    let sum= 0;

    for(let i= 0; i <= length; i++){
        let currentChar= string[i].charCodeAt();

        if(currentChar > firstIndex && currentChar < lastIndex){
            sum+= string[i].charCodeAt();
        }
        else if (currentChar > lastIndex && currentChar < firstIndex){
            sum+= string[i].charCodeAt();
        }
    }
    console.log(sum)
}
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
);