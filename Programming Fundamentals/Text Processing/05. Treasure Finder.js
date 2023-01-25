function treasureFinder(input){

    const key= input.shift().split(' ').map(Number);
    const keyLength= key.length - 1;
    let string= '';
    let increment= 0;
    const typePattern= /[&](?<type>[\w\s\W]+)[&]/g
    const coordinatePattern= /[<>](?<coordinates>[\w\s\W]+)[<>]/g

    input.forEach(el => {
        if(el !== 'find'){
            const length= el.length - 1;

            for(let i= 0; i <= length; i++){
                    const letterValue= el[i].charCodeAt() - key[increment];
                    string+= String.fromCharCode(letterValue);
                    increment++

                    if(increment > keyLength){
                        increment= 0;
                    }
            }
            
            if(string.includes('&') && string.includes('<')){
            let type= typePattern.exec(string).groups['type'];
            let coordinates= coordinatePattern.exec(string).groups['coordinates'];

            console.log(`Found ${type} at ${coordinates}`);
        
            type= typePattern.exec(string);
            coordinates= coordinatePattern.exec(string);
            }

            string= '';
            increment= 0;
        }
    })
}
treasureFinder(["1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
"find"]
);