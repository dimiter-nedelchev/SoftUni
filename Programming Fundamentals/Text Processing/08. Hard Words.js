function hardWords(input){

     input[0]= input[0].split(' ')
     const sentenceLength= input[0].length - 1;

     for(let i=0; i <= sentenceLength; i++){
        if(input[0][i].startsWith('_')){
            for(let word of input[1]){
                if(word.length === input[0][i].length){
                    input[0][i]= word;
                }
                else if(input[0][i].includes(',') || input[0][i].includes('.') || input[0][i].includes('!') || input[0][i].includes('?') || input[0][i].includes(':') || input[0][i].includes('-')){
                    let substring= input[0][i].substring(0, input[0][i].length - 1)
                    let mark= input[0][i].substring(input[0][i].length - 1)
                    if(word.length === substring.length){
                        input[0][i]= `${word}${mark}`;
                    }
                }
            }
        }
     }
     
     let sentence= input[0].join(' ')
     console.log(sentence)
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',

['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);