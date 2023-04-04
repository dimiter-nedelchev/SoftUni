function generateReport() {
    
    let checkBoxes= document.querySelectorAll('input:checked');
    let rows= document.querySelectorAll('tbody tr');
    let cols= document.querySelectorAll('table thead tr th input');
    let output= document.getElementById('output');
    let result= [];

    for(let row of rows){
        for(let i=0; i <= row.children.length - 1;i++){
            row.children[i].setAttribute('name',cols[i].name);
       }
    }

     for(let row of rows){
       let myObj= {}
     for(let checkbox of checkBoxes){
        let children= Array.from(row.children);
        for(let child of children){
            if(child.getAttribute('name') === checkbox.name){
                myObj[checkbox.name]= child.textContent;
            }
        }
    }
        result.push(myObj);
    }
    output.value= JSON.stringify(result);
}