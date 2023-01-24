function serializeString(input){
    
    const string= input[0];
    const length= string.length - 1;
    let chars= {}

    for(let i= 0; i <= length; i++){
        let indexes= [];
        const char= string[i]
        let charIndex= string.indexOf(char);

        chars[char]= ''

        while(charIndex >= 0){
            indexes.push(charIndex);
            charIndex= string.indexOf(char, charIndex + 1);
        }
        chars[char]= indexes.join('/')
        indexes= [];
    }

    for(let char in chars){
        console.log(`${char}:${chars[char]}`)
    }
}
serializeString(["avjavamsdmcalsdm"])