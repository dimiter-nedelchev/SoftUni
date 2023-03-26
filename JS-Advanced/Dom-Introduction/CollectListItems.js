function extractText() {
   //1. First Solution
   
    // let textElements= document.querySelectorAll('li');
   // let arrayOfTextElements= Array.from(textElements);

  //  for(let text of arrayOfTextElements){
  //      document.getElementById('result').value+= `${text.textContent}\n`;
   // }

   //2. Second Solution
   let textElement= document.getElementById('items').textContent;
   let textArea= document.getElementById('result');

   textArea.value= textElement;
}