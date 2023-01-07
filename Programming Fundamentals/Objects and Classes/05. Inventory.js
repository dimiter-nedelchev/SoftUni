function inventory(input){

   const length= input.length - 1;
   let heroes= [];
   let commands=[]

   for(let i=0;i<=length;i++){
        const [name, level, items]= input.shift().split(' / ');
        
        if(typeof items == 'string') {
        class Hero{
            constructor (name,level,items){
                this.name= name
                this.level= Number(level)
                this.items= items
            }
        }
        let newHero= new Hero(name,level,items)

        heroes.push(newHero)
   }
}
    heroes.sort((a,b) => a.level - b.level)

    for(let j=0;j<=heroes.length-1;j++){
        console.log(`Hero: ${heroes[j].name}`)
        for(let k=1;k<=2;k++){
            console.log(`${Object.keys(heroes[j])[k]} => ${Object.values(heroes[j])[k]}`)
        }
    }
}

inventory(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])