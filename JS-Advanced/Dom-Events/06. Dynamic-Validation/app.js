function validate() {
    
    let inputField= document.getElementById('email');
    const pattern= /[a-z]+\@[a-z]+\.[a-z]+/g

    inputField.addEventListener('change',(e) => {
    let target= pattern.exec(e.currentTarget.value);
       
       if(target){
        inputField.setAttribute("class","");
        target= pattern.exec(e.currentTarget.value);
        }
       else{
        inputField.setAttribute("class","error");
       }
       
    })
}