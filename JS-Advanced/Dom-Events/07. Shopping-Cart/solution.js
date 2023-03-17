function solve() {
   
   let textArea= document.getElementsByTagName('textarea')[0];
   let added= document.getElementsByClassName('add-product');
   let checkoutButton= document.getElementsByClassName('checkout')[0];
   let addElements= Array.from(added);

   let set= new Set([]);
   let totalPrice= 0;

   
   for(let addButton of addElements){
      addButton.addEventListener('click', add);
   }

   function add (e) {
      let parent= e.currentTarget.parentNode.parentNode;

      let price= parent.querySelector('div.product-line-price').textContent;
      let product= parent.querySelector('div.product-title').textContent;

      textArea.textContent+= `Added ${product} for ${price} to the cart.\n`
      set.add(product);
      totalPrice+= Number(price);
   }
   
   checkoutButton.addEventListener('click', checkout);

   function checkout (e) {
      let setArray= Array.from(set);
      let products= setArray.join(', ');

      textArea.textContent+= `You bought ${products.trim()} for ${totalPrice.toFixed(2)}.`
      for(let addButton of addElements){
         //addButton.disabled= true;
         //let newNode= addButton.cloneNode(true);
         //addButton.parentNode.replaceChild(newNode,addButton);
         addButton.removeEventListener('click', add);        
      }
      checkoutButton.removeEventListener('click', checkout);
   }
}