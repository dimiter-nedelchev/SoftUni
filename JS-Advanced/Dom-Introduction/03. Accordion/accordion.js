function toggle() {
        let buttonElementValue= document.querySelector('div span').textContent;
        let buttonElement= document.querySelector('div span');
        let extraElement= document.querySelector('div#extra');
        

        if(buttonElementValue == 'More'){
            extraElement.style.display= 'block';
            buttonElement.textContent= "Less";
        }
        else if(buttonElementValue == 'Less'){
            buttonElement.textContent= "More";
            extraElement.style.display= 'none';
        }
}