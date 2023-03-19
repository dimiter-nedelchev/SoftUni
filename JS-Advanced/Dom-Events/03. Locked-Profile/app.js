function lockedProfile() {
   const buttons= document.querySelectorAll('button');
   const radioButtons= document.querySelectorAll('div.profile [checked]');
   const hiddenFields= document.querySelectorAll('div.profile div');

   for(let i=0; i <= buttons.length - 1; i++){
     buttons[i].addEventListener('click', (e) => {
          if(!radioButtons[i].checked && buttons[i].textContent === 'Show more'){
            hiddenFields[i].style.display= 'inline';
            buttons[i].textContent= 'Hide it'
          }
        else if(!radioButtons[i].checked && buttons[i].textContent === 'Hide it'){
            hiddenFields[i].style.display= 'none';
            buttons[i].textContent= 'Show more'
          }
     });
   }
}
