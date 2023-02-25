function cars(commands){
    
    let carFactory= (function () {
        let cars= {};
        i= 0;
        return { 
        create () {
              let [someChar, name]= commands[i++].split('create ');
              cars[name]= {};
            },
            inherits (){
                let info= commands[i++].split(' ');
                let name= info[1];
                let parent= info[3];
    
                cars[name]= Object.create(cars[parent])
            },
            set () {
                let[command, name, key, value]= commands[i++].split(' ');
                cars[name][key]= value;
            },
            print () {
                let [command, name]= commands[i++].split(' ');
                let properties= [];
    
                for(let key in cars[name]){  
                properties.push(`${key}:${cars[name][key]}`);
                }
                console.log(properties.join(','));
            }
        } 
    }) ();
    
    for(let command of commands){
        if (command.includes('inherit')){
            carFactory.inherits();
        }
        else if(command.includes('create')){
            carFactory.create();
        }
        else if(command.includes('set')){
            carFactory.set();
        }
        else{
            let name= command.split('print ');
            carFactory.print();
        }
    }
}
cars(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'])