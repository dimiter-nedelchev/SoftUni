function lettersChangeNumbers(input){

    let strings= input.split(' ')
    
    for(let i=0; i <= strings.length; i++){
        if(strings[i] === ''){
            strings.splice(i, 1)
            i--;
        }
    }

    let sum= 0;
    const length= strings.length - 1;

    strings.forEach(string => {
        let current= string.split('');
        const firstLetter= current.shift();
        const lastLetter= current.pop();
        const num= Number(current.join(''))

        const firstLetterCode= firstLetter.charCodeAt()
        const lastLetterCode= lastLetter.charCodeAt()

        if(firstLetterCode >= 65 && firstLetterCode <= 90 ){
            let position= Math.abs(64 - firstLetterCode)
            sum+= (num/position)
        }
        else{
            let position= Math.abs(96 - firstLetterCode)
            sum+= (num*position)
        }
        if(lastLetterCode >= 65 && lastLetterCode <= 90){
            let position= Math.abs(64 - lastLetterCode)
            sum= (sum - position)
        }
        else{
            let position= Math.abs(96 - lastLetterCode)
            sum= (sum + position)
        }
    })
    console.log(sum.toFixed(2))
}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');