function colorize() {
   let table= document.querySelectorAll('table tbody tr:nth-of-type(even)');

    for(let i= 0; i<= table.length - 1; i++){
        table[i].style.background="teal"
    }
  }
