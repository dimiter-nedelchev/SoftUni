function encodeAndDecodeMessages() {

    const encodeButton= document.querySelectorAll('button')[0];
    const decodeButton= document.querySelectorAll('button')[1];

    const encodeTextArea= document.querySelectorAll('textarea')[0];
    const decodeTextArea= document.querySelectorAll('textarea')[1];
    
    encodeButton.addEventListener('click', (e) => {
        let message= encodeTextArea.value;
        let encodedMessage= '';

        for(let char of message){
            encodedMessage+= String.fromCharCode(char.charCodeAt() + 1);
        }
       decodeTextArea.value= encodedMessage;
       encodeTextArea.value='';
    });

    decodeButton.addEventListener('click', (e) => {
        let message= decodeTextArea.value;
        let decodedMessage='';

        for(let char of message){
            decodedMessage+= String.fromCharCode(char.charCodeAt() - 1);
        }
        decodeTextArea.value= decodedMessage;
    });
}