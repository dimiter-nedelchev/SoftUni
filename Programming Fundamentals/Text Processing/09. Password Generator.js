function passwordGenerator(input){

    const firstString= input[0];
    const secondString= input[1];
    const thirdString= input[2];
    const vowels= ['a', 'o', 'i', 'e', 'u']

    let target= firstString.concat(secondString).split('')
    let vowelCount= 0;
    const length= target.length - 1;

    for(let i=0; i <= length; i++){
        
        if(vowels.includes(target[i])){
            target[i]= thirdString[vowelCount].toUpperCase()
        
            if(vowelCount === thirdString.length - 1){
                vowelCount= 0;
            }
            else{
                vowelCount+= 1;
            } 
        }
    }

    const reversedTarget= target.reverse().join('')
    console.log(`Your generated password is ${reversedTarget}`)
}
passwordGenerator([

    'easymoneyeazylife',
    
    'atleasttencharacters',
    
    'absolute'
    
    ])