function wordTracker(input){

    let targetWords= input.shift().split(' ');
    let occurringWords= {};

    for(const target of targetWords){
        occurringWords[target]= 0;
    }

    input.forEach(word => {
        const currentWord= word;

        if(targetWords.includes(currentWord)){
            if(occurringWords[currentWord]){
                occurringWords[currentWord]+= 1
            }
            else{
                occurringWords[currentWord]= 1
            }
        }
    })

    let words= Object.entries(occurringWords)
    
    words.sort((a,b) => b[1] - a[1])

    for(const word of words){
        console.log(`${word[0]} - ${word[1]}`)
    }

}
wordTracker([

    'this sentence',
    
    'In', 'this', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);