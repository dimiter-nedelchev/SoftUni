function wordOccurences(input){

    let words= {};

    input.forEach(word => {
        
        if(words[word]){
            words[word]+= 1;
        }
        else{
            words[word] = 1;
        }
    })

    let sumWords= Object.entries(words);

    sumWords.sort((a,b) => (b[1]) - (a[1]))
    
    for(const word of sumWords){
        console.log(`${word[0]} -> ${word[1]} times`)
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);