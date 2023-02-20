function sameNums(num){


   let sum= num.toString().split('').reduce((previous,current) => {
        return previous+= Number(current);
    },0)

   let stringArray= num.toString().split('')

   for(let i=0; i<=stringArray.length - 1; i++){
        if(stringArray[i] !== stringArray[i + 1] && i !== stringArray.length - 1){
            console.log(`false\n${sum}`)
            return
        }
   }
   console.log(`true\n${sum}`)
}
sameNums(1234)