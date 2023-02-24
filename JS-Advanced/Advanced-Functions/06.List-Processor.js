function solve(commands){
    
    let processor= (function () { 
        let collection= [];
        return {
        add (argument) {
            collection.push(argument);
        },
        remove (argument) {
           for(let i= 0; i <= collection.length - 1; i++){
                if(collection[i] === argument){
                    collection.splice(i, 1);
                    --i
                }
           }
        },
        print () {
            console.log(collection.join(','));
        }
    }
}) ()

    for(let command of commands){
        let [current,argument]= command.split(' ');
        processor[current](argument);
    }
}
solve(['add pesho', 'add pesho', 'add pesho', 'remove pesho', 'print','print'])
solve(['add pesho', 'remove pesho', 'add pesho','print','print'])