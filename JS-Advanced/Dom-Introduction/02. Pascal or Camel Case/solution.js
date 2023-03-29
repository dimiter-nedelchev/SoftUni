function solve() {
  const textElement= document.getElementById('text').value;
  const namingConventionElement= document.getElementById('naming-convention').value;
  const resultElement= document.getElementById('result');
  let lowerCase= textElement.toLowerCase();   
  let words= lowerCase.split(' ');

  if(namingConventionElement === 'Pascal Case'){
    let pascalCase= '';

       for(let word of words){
         let upperCase= word[0].toUpperCase();
         let restOfWord= word.substring(1);

         pascalCase+= upperCase + restOfWord;
       }
       resultElement.textContent= pascalCase;
  }

  else if(namingConventionElement === 'Camel Case'){
      let camelCase= words[0];

      for(let i= 1; i<= words.length - 1; i++){
        let upperCase= words[i][0].toUpperCase();
        let restOfWord= words[i].substring(1);

        camelCase+= upperCase + restOfWord;
      }
      resultElement.textContent= camelCase;
  }
  else{
    resultElement.textContent= 'Error!'
  }
}