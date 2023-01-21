function extractFile(input){

    let directory= input.split('\\');

    directory.forEach(word => {
        if(word.includes('.')){
            let wordArr= word.split('.');
            let length= wordArr.length - 1;

            if(length > 1){
                for(let i=1;i <= length - 1; i++){
                    wordArr[0]+= `.${wordArr[i]}`
                }
            }
                console.log(`File name: ${wordArr[0]}`);
                console.log(`File extension: ${wordArr[length]}`)
        }
    })
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
