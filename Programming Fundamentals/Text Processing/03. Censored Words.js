function censoredWords(string, target){

   const length= target.length
   let newString= string
    
    function hideWord(length){
        let censored='*';
        return censored.repeat(length);
    }
    
    while(newString.indexOf(target) >= 0){
        newString= newString.replace(target, hideWord(length))
    }

    console.log(newString)
}
censoredWords('A small sentence with some small words', 'small')
censoredWords('Find the hidden word', 'hidden')