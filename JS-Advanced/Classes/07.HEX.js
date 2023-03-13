class Hex {
    constructor(value){
        this.value= value
    }
    valueOf () {
        return this.value
    }
    toString () {
        return '0x'.concat(this.value.toString(16).toUpperCase())
    }
    plus(num){
        let value= this.valueOf() + num.valueOf()
        return new Hex (value);
    }
    minus(num){
        let value= this.valueOf() - num.valueOf()
        return new Hex(value)
    }
    parse(string){
        return parseInt(string, 16)
    }
}
let FF = new Hex(255);
FF.valueOf() + 1 == 256;
console.log(FF.toString());

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA'));