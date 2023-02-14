function thePianist(input){

    let index= 0;
    let command='';
    const songNumer= Number(input.shift());
    let symphonies= {};

    for(let i = 1; i <= songNumer; i++){
        const [piece, composer, key]= input.shift().split('|');

        symphonies[piece]= {
            composer: composer,
            key: key,
        }
    }

    while(command !== 'Stop'){
        command= input[index++];

        if(command === 'Stop'){
            break;
        }
        else if(command.includes('Add')){
            add(symphonies, command);
        }
        else if(command.includes('Remove')){
            remove(symphonies, command);
        }
        else{
            changeKey(symphonies, command);
        }
    }

    function add(symphonies, command){
        const [currCommand, currPiece, currComposer, currKey]= command.split('|');

        if(!symphonies.hasOwnProperty(currPiece)){
            symphonies[currPiece]= {
                composer: currComposer,
                key: currKey,
            }
            console.log(`${currPiece} by ${currComposer} in ${currKey} added to the collection!`)
        }
        else{
            console.log(`${currPiece} is already in the collection!`)
        }
        return symphonies;
    }

    function remove(symphonies, command){
        const [currCommand, currPiece]= command.split('|');

        if(symphonies.hasOwnProperty(currPiece)){
            delete symphonies[currPiece];
            console.log(`Successfully removed ${currPiece}!`);
        }
        else{
            console.log(`Invalid operation! ${currPiece} does not exist in the collection.`)
        }
        return symphonies;
    }

    function changeKey(symphonies, command){
        const [currCommand, currPiece, currKey]= command.split('|');

        if(symphonies.hasOwnProperty(currPiece)){
            symphonies[currPiece].key= currKey;
            console.log(`Changed the key of ${currPiece} to ${currKey}!`);
        }
        else{
            console.log(`Invalid operation! ${currPiece} does not exist in the collection.`)
        }
        return symphonies;
    }

    for(const piece in symphonies){
        console.log(`${piece} -> Composer: ${symphonies[piece].composer}, Key: ${symphonies[piece].key}`)
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  );
//thePianist();