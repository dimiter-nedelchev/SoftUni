function stringValue(input){

    const string= input[0];
    const command= input[1];
    let sum= 0;
    const length= string.length - 1;

    for(let i= 0; i <= length; i++){

        if(command === 'UPPERCASE'){
            const upperCase= string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90;

            if(upperCase){
                sum+= string[i].charCodeAt();
            }
        }
        else{
            const lowerCase= string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122

            if(lowerCase){
                sum+= string[i].charCodeAt();
            }
        }
    }
    console.log(`The total sum is: ${sum}`)
}
stringValue(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
);
stringValue(['AC/DC',
'UPPERCASE']
);