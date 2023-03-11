class List{
    #listElements= []
    constructor(){
        this.size= this.#listElements.length;
        }
    add (element) {
        if(typeof element === 'number'){
        this.#listElements.push(element);
        this.size= this.#listElements.length;
        return this.#listElements.sort((a,b) => a - b);
        }
    }
    remove (index) {
        if(index >= 0 && index <= this.size - 1){
        this.#listElements.splice(index, 1);
        this.size= this.#listElements.length;
        return this.#listElements;
        }
    }
    get (index) {
        if(index >= 0 && index <= this.size - 1){
        return this.#listElements[index];
        }
    }
}

let list = new List();

list.add('that');

list.add('this');

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1); 

console.log(list.get(1));
console.log(list.size)
console.log(list.hasOwnProperty('size'))