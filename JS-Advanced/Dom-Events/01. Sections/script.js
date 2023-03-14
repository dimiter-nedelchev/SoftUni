function create(words) {
  
   const output= document.getElementById('content');

   for(let word of words){
      let divElement= document.createElement('div');
      let paragraphElement= document.createElement('p');

      paragraphElement.textContent= word;
      paragraphElement.style.display= 'none';

      divElement.appendChild(paragraphElement);

      divElement.addEventListener('click', (e) => {
        divElement.firstChild.style= 'inline'
      });

      output.appendChild(divElement);
   }
}