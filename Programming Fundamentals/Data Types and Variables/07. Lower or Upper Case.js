function lowerOrUpper(char) {

    let character=char;

    let num=character.charCodeAt(0);

   let result= num >= 65 && num <= 90 
   ? "upper-case"
   : "lower-case"

   console.log(result)
}
lowerOrUpper('L');
lowerOrUpper('f');