function stringGame(input){

    let index= 0;
    let command= '';
    let string= input.shift();

    while(command !== 'Done'){
        command= input[index++];

        if(command.includes('Change')){
            const [currCommand, character, replacement]= command.split(' ');

            let charIndex= string.indexOf(character);

            while(charIndex >= 0){
                string= string.replace(character, replacement);
                charIndex= string.indexOf(character, charIndex + 1);
            }
            console.log(string)
        }
        else if(command.includes('Includes')){
            const [currCommand, substr] = command.split(' ');

            if(string.includes(substr)){
                console.log('True')
            }
            else{
                console.log('False')
            }
        }
        else if(command.includes('End')){
            const [currCommand, substr]= command.split(' ');

            if(string.endsWith(substr)){
                console.log('True');
            }
            else{
                console.log('False');
            }
        }
        else if(command.includes('Uppercase')){
            string= string.toUpperCase();
            console.log(string);
        }
        else if(command.includes('FindIndex')){
            const [currCommand, char]= command.split(' ');

            let charIndex= string.indexOf(char);
            console.log(charIndex);
        }
        else if(command.includes('Cut')){
            let [currCommand, startIndex, charCount]= command.split(' ');

            startIndex= Number(startIndex);
            let endIndex= startIndex + Number(charCount);

            string= string.substring(startIndex, endIndex);

            console.log(string);
        }
    }


}
stringGame(["//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])
