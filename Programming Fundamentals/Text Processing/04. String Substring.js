function stringSubstring(target, sentence){

    target= target.toLowerCase();
    let sentenceArr= sentence.split(' ')
    let length= sentenceArr.length - 1;
    let isFound= false

    for(let i=0; i <= length; i++){
        if(sentenceArr[i].toLowerCase() === target){
            console.log(target)
            isFound=true;
            break;
        }
    }
     if(!isFound){
        console.log(`${target} not found!`)
     }

}
stringSubstring('javascript',
'JavaScript is the best programming language');
stringSubstring('python',
'JavaScript is the best programming language');