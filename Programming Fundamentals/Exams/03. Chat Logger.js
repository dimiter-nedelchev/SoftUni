function chatLogger(arr){

    let index=0;
    let chat= [];
    let length= arr.length - 1;
    let commands= [];
    let message= '';
    let newMessage= '';
    let command= '';
    let position= 0;
    let messages=[]

    for(let i=0;i<=length;i++){
        commands= arr[index++].split(' ');
        command= commands[0];
        
        if(command === 'end'){
            for(let el of chat){
                console.log(`${el}`)
            }
        }
        else if(command === 'Chat'){
            message= commands[1];

            chat.push(message);
        }
        else if(command === 'Delete'){
            message= commands[1];

            if(chat.includes(message)){
                position= chat.indexOf(message);
                chat.splice(position,1)
            }
        }
        else if(command === 'Edit'){
            message= commands[1];
            newMessage= commands[2];

            if(chat.includes(message)){
                position= chat.indexOf(message);
                chat.splice(position,1,newMessage)
            }
        }
        else if(command === 'Pin'){
            message= commands[1];
            if(chat.includes(message)){
                let temp= message
                position= chat.indexOf(message);

                chat.splice(position,1);
                chat.push(temp)
            }
        }
        else{
            messages= commands[1].split(' ');
            for(let j=1;j<=commands.length-1;j++){
                chat.push(commands[j])
            }
        }
    }

}
//chatLogger(["Chat Hello","Chat darling","Edit darling Darling","Spam how are you","Delete Darling","end"]);
//chatLogger(["Chat Hello","Delete John","Pin Hi","end"]);
chatLogger(["Chat John","Spam Let's go to the zoo","Edit zoo cinema","Chat tonight","Pin John","end"])