function addItem() {
    
    let inputElement= document.getElementById('newItemText');
    let listElement= document.getElementById('items');

    let newElement= document.createElement('li');
    newElement.textContent= inputElement.value;

    listElement.appendChild(newElement);
}