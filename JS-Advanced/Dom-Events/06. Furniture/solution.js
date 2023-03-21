function solve() {
  const generateButton= document.querySelectorAll('button')[0];
  const buyButton= document.querySelectorAll('button')[1];

  const inputField= document.querySelectorAll('textarea')[0];
  const outputField= document.querySelectorAll('textarea')[1];

  const tableBody= document.querySelector('tbody');

  generateButton.addEventListener('click', (e) => {
    const furnitures= JSON.parse(inputField.value);

    for(let furniture of furnitures){
      let newRow= document.createElement('tr');
      newRow.innerHTML= `<td><img src= "${furniture.img}"></td><td><p>${furniture.name}</p></td><td><p>${furniture.price}</p></td><td><p>${furniture.decFactor}</p></td><td><input type= "checkbox"/></td>`
      tableBody.appendChild(newRow);
    }
    
  });

  buyButton.addEventListener('click', (e) => {
      const checkedBoxes= document.querySelectorAll('input:checked');
      const furnitureItems= [];
      let totalPrice= 0;
      let totalDecFactor= 0;
      let pieces= 0;

      for(let box of checkedBoxes){
        let row= box.parentNode.parentNode;
        let furnitureData= row.firstChild.nextSibling;
        let priceData= furnitureData.nextSibling;
        let decFactorData= priceData.nextSibling;

        totalPrice+= Number(priceData.textContent);
        furnitureItems.push(furnitureData.textContent);
        totalDecFactor+= Number(decFactorData.textContent);

        pieces++
      
      }
      outputField.value+= `Bought furniture: ${furnitureItems.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(totalDecFactor/pieces)}`;
  });
}