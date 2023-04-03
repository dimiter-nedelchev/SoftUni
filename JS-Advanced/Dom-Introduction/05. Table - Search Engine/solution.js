function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const rows= document.querySelectorAll('tbody tr');
      let searchValue= document.getElementById('searchField');
      
      for(let currentRow of rows){
         let cells= Array.from(currentRow.children);
         for(let cell of cells){
            if(cell.textContent.toLowerCase().includes(searchValue.value.toLowerCase())){
               currentRow.className='select';
               break;
            }
            else{
               currentRow.className= ''
            }
         }
      }
       searchValue.value=''
   }
}