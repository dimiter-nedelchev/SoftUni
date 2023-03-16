function focused() {
    
    let inputElements= document.querySelectorAll('div input');

    for(let el of inputElements){
        el.addEventListener('focus', (e) => { 
            e.currentTarget.parentNode.className="focused";

            for(let element of inputElements){
                if(element !== e.currentTarget){
                     element.parentNode.className="";
                }
            }
        })
    }
}