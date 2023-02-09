function imitationGame(input){

    let string= input.shift().split('');
    
   for(let i=0;i<=input.length-1;i++){

        let command= input[i]

        if(command === 'Decode'){
            break;
        }
       else if(command.includes('ChangeAll')){
            changeAll(command);
        }
        else if(command.includes('Insert')){
            insert(command);
        }
        else{
            move(command);
        }
    }

    function changeAll(command){
       
      const [currCommand, substring, replacement]= command.split('|');

       string= string.join('');

       if(string.includes(substring)){
        let substringIndex= string.indexOf(substring)

        while(substringIndex >= 0){
        string= string.replace(substring, replacement)
        substringIndex= string.indexOf(substring)
        }
       }
       string= string.split('')

       return string
       }

    function insert(command){
        let [currCommand, index, char]= command.split('|');
        index= Number(index);

        return string.splice(index,0,char);
    }

    function move(command){
        let [currCommand, index]= command.split('|')
        index= Number(index);
        string= string.join('');

        let firstPart= string.substring(0,index);
        let secondPart= string.substring(index);

        string= secondPart + firstPart;
        string= string.split('');
        
        return string;
    }

    let message= string.join('')
    console.log(`The decrypted message is: ${message}`)
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  );
//imitationGame(['owyouh','Move|2','Move|3','Insert|3|are','Insert|9|?','Decode',]);