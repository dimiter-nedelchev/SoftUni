function search() {

   let townElements= document.querySelectorAll('ul#towns li');
   let searchBarElement= document.getElementById('searchText').value;
   let resultElement= document.getElementById('result');
   let matches= 0;
   
   
   for(let town of townElements){
      if(town.textContent.toLowerCase().includes(searchBarElement.toLowerCase())){
         town.style.textDecoration='underline';
         town.style.fontWeight= "bold"
         matches+= 1;
      }
   }
   resultElement.textContent=`${matches} matches found`
}
