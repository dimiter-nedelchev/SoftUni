function solve() {
  
  const textArea= document.getElementById('input').value.slice(0, -1).split('.');
  const output= document.getElementById('output');
  const length= textArea.length;
  let sentence='';

  for(let i=1; i <= length; i++){
    sentence+= `${textArea[i - 1]}.`

    if (i % 3 === 0){
      let newParagraph= document.createElement('p');
      newParagraph.textContent= sentence;
      output.appendChild(newParagraph);
      sentence= '';
    }
    else if (i == length){
      let newParagraph= document.createElement('p');
      newParagraph.textContent= sentence;
      output.appendChild(newParagraph);
      sentence= '';
    }
  }
}