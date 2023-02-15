function emojiDetector(input){

    const emojiPattern= /(:{2}|\*{2})(?<emoji>[A-Z][a-z][a-z]+)(\1)/g;
    const digitPattern= /[0-9]/g;
    let emojiCount= 0;
    let coolness= 0;
    let coolEmojis= [];

    let digits= input[0].match(digitPattern).map(Number);
    let threshold= 1; 

    for(let i= 0; i <= digits.length - 1; i++){
        
        if(i === 0){
        threshold*= digits[i];
        }
        else{
            threshold*= digits[i]; 
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    let emojis= input[0].matchAll(emojiPattern);

    for(let emoji of emojis){
        emojiCount+= 1;

        let currentEmoji= emoji.groups['emoji'];

        for(let j=0; j <= currentEmoji.length - 1; j++){
            coolness+= currentEmoji[j].charCodeAt();
        }
        
        if(coolness > threshold){
            coolEmojis.push(emoji);
            coolness= 0;
        }
        else{
            coolness= 0;
        }
    }

    console.log(`${emojiCount} emojis found in the text. The cool ones are:`)
    for(let coolEmoji of coolEmojis){
        console.log(coolEmoji[0]);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);