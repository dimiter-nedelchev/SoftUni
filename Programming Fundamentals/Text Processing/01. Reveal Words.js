function revealWords(words, sentence){

    let wordArr= words.split(', ');
    let sentenceArr= sentence.split(' ')

    let sentenceLength= sentenceArr.length - 1;
    let wordLength= wordArr.length -1;

    for(let i=0;i <= sentenceLength; i++){
        if(sentenceArr[i].startsWith('*')){
            for(let j=0;j <= wordLength; j++){
                if(wordArr[j].length === sentenceArr[i].length){
                    sentenceArr[i]= wordArr[j]
                }
            }
        }
    }
    console.log(`${sentenceArr.join(' ')}`)
}
revealWords('great',
'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');