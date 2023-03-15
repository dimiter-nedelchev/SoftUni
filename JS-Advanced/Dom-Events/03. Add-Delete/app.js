function addItem() {

    let inputValue= document.getElementById('newItemText').value;
    let listElements= document.getElementById('items');

    let attributeElement= document.createElement('a');
    attributeElement.textContent= '[Delete]';
    attributeElement.href='#'
    
    let listElement= document.createElement('li');
    listElement.textContent= inputValue;

    listElement.appendChild(attributeElement);
    listElements.appendChild(listElement);

    attributeElement.addEventListener('click', (e) => {
        console.log(e)
        listElement.parentNode.removeChild(listElement);
    });
}