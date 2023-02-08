function activationKeys(input){

let index= 0;
let command= '';
let activationKey= input.shift();

while(command !== 'Generate'){
    command= input[index++];

    if(command.includes('Slice')){
        let [currCommand, startIndex, endIndex]= command.split('>>>');
        startIndex= Number(startIndex);
        endIndex= Number(endIndex);

        const firstPart= activationKey.substring(0, startIndex);
        const secondPart= activationKey.substring(endIndex);

        activationKey= firstPart + secondPart;
        console.log (activationKey);
    }
    else if(command.includes('Flip')){
        let [currCommand, type, startIndex, endIndex]= command.split('>>>');
        startIndex= Number(startIndex);
        endIndex= Number(endIndex);

        let string= activationKey.substring(startIndex, endIndex);
        let firstPart= activationKey.substring(0,startIndex);
        let secondPart= activationKey.substring(endIndex);

        if(type === 'Upper'){
            activationKey= firstPart + string.toUpperCase() + secondPart;
            console.log (activationKey);
        }
        else if(type === 'Lower'){
            activationKey= firstPart + string.toLowerCase() + secondPart;
            console.log (activationKey);
        }
    }
    else if(command.includes('Contains')){
        let [currCommand, key]= command.split('>>>');

        if (activationKey.includes(key)){
            console.log(`${activationKey} contains ${key}`);
        }
        else{
            console.log('Substring not found!')
        }
    }
}
console.log(`Your activation key is: ${activationKey.trim()}`)
}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]
);