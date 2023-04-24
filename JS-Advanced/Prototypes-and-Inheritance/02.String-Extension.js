(function (){
    String.prototype.ensureStart= function (str) {
        if(this.startsWith(str)){
            return this.toString();
        }
        return str.concat(this.toString());
    };
    String.prototype.ensureEnd= function (str){
        if(this.endsWith(str)){
            return this.toString();
        }
        return this.toString().concat(str);
    };
    String.prototype.isEmpty= function (){
        return this.toString() === ''
    };
    String.prototype.truncate= function (n){
        if(this.length <= n){
            return this.toString()
        }
        if(this.includes(' ')){
            let lastIndex= this.toString().substring(0, n - 2).lastIndexOf(' ');
            while(lastIndex !== -1){
                return this.toString().substring(0, lastIndex).concat('...')
            }
        }
        if(n >= 4){
            let string= this.toString().substring(0, n - 3).concat('...');
            return string;
        }
        return '.'.repeat(n);
    }
    String.format= function (string, ...params){
        let myString= string;
        let pattern= /[{][0-9]+[}]/g
        let replacement= myString.match(pattern);
    
        for(let i= 0; i<= params.length -1; i++){
            myString= myString.replace(replacement[i], params[i]);
        }
        return myString;
    }
})()

let str = 'my string';

str = str.ensureStart('my');

str = str.ensureStart('hello ');

str = str.truncate(16);

str = str.truncate(14);

str = str.truncate(8);

str = str.truncate(4);

str = str.truncate(2);

str = String.format('The {0} {1} fox',

'quick', 'brown');

str = String.format('jumps {0} {1}',

'dog');