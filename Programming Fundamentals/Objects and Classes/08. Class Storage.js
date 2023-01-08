function classStorage(){

    class Storage{
        constructor(capacity){
            this.capacity= capacity,
            this.addProduct= function addProduct(product){
                this.capacity-= product.quantity
                this.totalCost+= (product.price)*(product.quantity)
                this.storage.push(product)
            },
            this.getProducts= function getProduct(){
                let output= [];
                this.storage.forEach(item => {
                    output.push(JSON.stringify(item))
                })
                return output.join('\n')
            }
            this.storage= []
            this.totalCost=0
            }
        }
    
        let productOne = {name: 'Cucamber',

        price: 1.50, quantity: 15};
        
        let productTwo = {name: 'Tomato',
        
        price: 0.90, quantity: 25};
        
        let productThree = {name: 'Bread',
        
        price: 1.10, quantity: 8};
        
        let storage = new Storage(50);
        
        storage.addProduct(productOne);
        
        storage.addProduct(productTwo);
        
        storage.addProduct(productThree);
        
        console.log(storage.getProducts());
        
        console.log(storage.capacity);
        
        console.log(storage.totalCost);
}
classStorage()