function secretChat(input){

    let string= input.shift();
    let command= '';
    let index= 0;

    while(command !== 'Reveal'){
        command= input[index++];

        if(command.includes('ChangeAll')){
            const [currCommand, substring, replacement]= command.split(':|:');

            let indexOf= string.indexOf(substring);

            while(indexOf >= 0){
                string= string.replace(substring, replacement);
                indexOf= string.indexOf(substring, indexOf + 1);
            }
            console.log(string)
        }
        else if(command.includes('InsertSpace')){
            const [currCommand, index]= command.split(':|:');

            let firstPart= string.substring(0, index);
            let secondPart= string.substring(index);

            string= firstPart + ' ' + secondPart;
            console.log(string);
        }
        else if(command.includes('Reverse')){
            let [currCommand, message]= command.split(':|:');

            if(string.includes(message)){
                let firstIndex= string.indexOf(message);
                let lastIndex= firstIndex + message.length;

                let firstPart= string.substring(0,firstIndex);
                let lastPart= string.substring(lastIndex);

                let reversedMessage= message.split('').reverse().join('');

                string= firstPart + lastPart + reversedMessage;
                console.log(string)
            }
            else{
                console.log('error');
            }
        }
    }
    console.log(`You have a new text message: ${string}`)
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);