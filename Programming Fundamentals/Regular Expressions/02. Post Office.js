function postOffice(input){

    const parts= input[0].split('|');
    const first= parts[0];
    const second= parts[1];
    let third= parts[2].concat(' ');
    let justforthesakeofit=' ';
    third= justforthesakeofit.concat(third)

    let isFound= false;
    const letterPattern= /([\#|\$|\*|\%|\&])(?<letters>[A-Z]+)\1/g
    const letterFinder= /(?<asciiCode>\d+)[:](?<length>[0-9]{2})/g
    
    const capitalLetters= letterPattern.exec(first).groups['letters'].split('');
    
    let matches= second.matchAll(letterFinder);

    for(let capital of capitalLetters){
    for(let match of matches){
        const value= Number(match.groups['asciiCode']);
        const length= Number(match.groups['length']);

        const letter= String.fromCharCode(value);

        if(capital === letter){
        if(length >= 1 && length <= 20){
            if(capitalLetters.includes(letter)){
                let wordPattern= new RegExp(`(\\s[${letter}][\\S]{${length}}\\s)`, 'g');
                let words= third.match(wordPattern);

               if(words){
                for(let word of words){
                    console.log(word);
                    isFound= true;
                    break;
                }
            }
            }
        }
    }
    if(isFound){
        isFound= false;
        break;
    }
    }
    matches= second.matchAll(letterFinder);
}
}
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);