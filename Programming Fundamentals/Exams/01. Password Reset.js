function passwordReset(input){

    let password= input.shift();
    let index= 0;
    let command= '';
    let newPassword= '';

    while(command !== 'Done'){
        command= input[index++];

        if(command.includes('TakeOdd')){
            for(let i= 0; i <= password.length - 1; i++){
                if(i % 2 !== 0){
                    newPassword+= password[i];
                }
            }
            password= newPassword;
            console.log(password);
            newPassword='';
        }
        else if(command.includes('Substitute')){
            const [currCommand,substring, substitute ]= command.split(' ');

            if(password.includes(substring)){
                let substringIndex= password.indexOf(substring);

                while(substringIndex >= 0){
                    password= password.replace(substring, substitute);
                    substringIndex= password.indexOf(substring, substringIndex + 1);
                }
                console.log(password);
            }
            else{
                console.log('Nothing to replace!')
            }
        }
        else if(command.includes('Cut')){
            let [currCommand, index, length]= command.split(' ');

            index= Number(index);
            length= Number(length);

            let firstPart= password.substring(0,index);
            let secondPart= password.substring(index+length,);

            password= firstPart + secondPart;
            console.log(password);
        }
    }
    console.log(`Your password is: ${password}`)
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]

);
