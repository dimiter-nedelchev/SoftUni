function pascalCase(input){

    let sentenceArr= input.split('');
    let wordArr=[];
    let word=''
    let length= sentenceArr.length -1;

    for (let i=0; i <= length -1; i++){
        let isCapital= sentenceArr[i+1].charCodeAt() >= 65 && sentenceArr[i+1].charCodeAt() <= 90
        if(!isCapital){
            word+= sentenceArr[i];
        }
        else{
            word+= sentenceArr[i];
            wordArr.push(word)
            word=''
        }
        if(i === length -1){
            word+= sentenceArr[i+1]
            wordArr.push(word)
        }
    }

    console.log(`${wordArr.join(', ')}`)
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCase('HoldTheDoor');
pascalCase('ThisIsSoAnnoyingToDo');