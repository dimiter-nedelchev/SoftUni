function deleteByEmail() {

    let inputValue= document.getElementsByName('email')[0].value;
    let resultElement= document.getElementById('result');

    let emailCellElements= document.querySelectorAll('tr td:nth-of-type(2)');
    let emailElements= Array.from(emailCellElements)
    let target= emailElements.find((x) => x.textContent == inputValue)

    if(target){
        let parentElement= target.parentNode;
        parentElement.parentNode.removeChild(parentElement);
        resultElement.textContent= 'Deleted'
    }
    else{
        resultElement.textContent= 'Not found.'
    }

}