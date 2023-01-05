function cats(arr){

    let index= 0;
    const length= arr.length-1;
    let commands= []
    let name='';
    let age='';

    for(let i=0;i<=length;i++){
        commands= arr[i].split(' ');
        name= commands[0];
        age= Number(commands[1]);

        class Cats {
            constructor (name, age) {
                this.name= name;
                this.age= age;
            }
            meow(){
                 console.log(`${this.name}, age ${this.age} says Meow`)
            }
        }

        const cat= new Cats(name,age)
        cat.meow()
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);