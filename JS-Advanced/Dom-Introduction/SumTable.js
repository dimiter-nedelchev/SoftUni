function sumTable() {

    let cols= document.querySelectorAll('table tbody tr td:nth-of-type(2):not(#sum)');
    let sum= 0;
    let total= document.getElementById('sum');

    for(let col of cols){
        sum+= Number(col.textContent)
    }
    total.textContent= sum;
}