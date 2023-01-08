function dictionary(input){

    let dictionary= [];
    const index= input.length-1;
    let foundKey=false
    let newWord=''

    for(let i=0;i<=index;i++){
        const term= JSON.parse(input[i]);
        const word= Object.keys(term)[0]
        const description= Object.values(term)[0]

        class Word{
            constructor(term,description){
                this.term= term
                this.description= description
            }
        }
       
        if(dictionary.length >= 1) {
        for(let j=0;j<=dictionary.length-1;j++){
            for(let value of Object.values(dictionary[j])) {
                if(value === Object.keys(term)[0]) {
                    dictionary[j].description= Object.values(term)[0] 
                    foundKey= true;
                }
            }
            }
            if(foundKey === false) {
                newWord= new Word(word,description)
                dictionary.push(newWord)
            }
            else{
                foundKey= false
            }
        }
        else{
            newWord= new Word(word,description)
            dictionary.push(newWord)
        }
    }

    dictionary.sort((a,b) => (a.term).localeCompare(b.term))
   
    for(let k=0;k<=dictionary.length-1;k++){
        console.log(`Term: ${dictionary[k].term} => Definition: ${dictionary[k].description}`)
    }
}
dictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ])