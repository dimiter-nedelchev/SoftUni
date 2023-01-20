function modernTimes(input){

    let sentence= input.split(' ');
    let newWord=''
    let isLetter=false
    
    sentence.forEach(word => {
        if(word.startsWith('#') && word.length > 1){
            for(let symbol of word){
                isLetter= symbol.charCodeAt() >= 60 && symbol.charCodeAt() <= 90 || symbol.charCodeAt() >=97 && symbol.charCodeAt() <= 122
                if(symbol !== '#'){
                    if(isLetter){
                        newWord+= symbol
                        continue;
                    }
                    else{
                        newWord=''
                        isLetter= false;
                        break;
                    }
                }
            }
            if(isLetter){
                console.log(newWord)
                newWord=''
            }
        }
    })
}
modernTimes('#Nasa!');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');