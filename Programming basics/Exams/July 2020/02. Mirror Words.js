function mirrorWords(string){

    const pattern= /([#@])(?<wordPair1>[A-Za-z][A-Za-z][A-Za-z]+)\1{2}(?<wordPair2>[A-Za-z][A-Za-z][A-Za-z]+)\1/g; 

    let matches= string[0].matchAll(pattern);
    let wordPairs= [];
    let pairs=0
    let mirrors= 0;

    if(matches){
        for(let match of matches){

            let firstWord= match.groups['wordPair1'];
            let secondWord= match.groups['wordPair2'].split('').reverse().join('');
            pairs+= 1;

            if(firstWord === secondWord){
                let strings= `${firstWord} <=> ${secondWord.split('').reverse().join('')}`;
                wordPairs.push(strings);
                mirrors+= 1;
            }
        }
        if (pairs){
            console.log(`${pairs} word pairs found!`);
            if(mirrors){
            console.log('The mirror words are:')
            console.log(`${wordPairs.join(', ')}`);
            }
            else{
                console.log('No mirror words!');
            }
        }
        else if (!pairs && !mirrors){
            console.log('No word pairs found!');
            if(!mirrors){
                console.log('No mirror words!');
            }
        }
    }
}
mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
    ]
    );