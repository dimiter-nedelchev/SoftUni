function notify(message) {
 const buttonElement= document.querySelector('button');
 const notificationElement= document.querySelector('div#notification');

  notificationElement.style.display='block';
  notificationElement.textContent=  message;
  
  notificationElement.addEventListener('click', () => {
    notificationElement.style.display= 'none';
  })
};