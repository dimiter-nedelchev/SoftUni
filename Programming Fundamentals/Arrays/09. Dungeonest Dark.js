function dungeonestDark(arr){

    let commands=[]

    let index=0;

    let hp=100;
    let coins=0;

    let room=0;

    let name='';
    let num=0;

    let newArr= arr.split('|')

    for(let i=0;i<=newArr.length-1;i++) {
        commands= newArr[index++].split(' ')
        name=commands[0];
        num=Number(commands[1]);
        room+=1;

        if(name==="potion") {
                if(hp+num>100) {
                    console.log(`You healed for ${100-hp} hp.`)
                    hp=100;
                }
                else {
                    console.log(`You healed for ${num} hp.`);
                    hp+= num;
                }
                console.log(`Current health: ${hp} hp.`);
        }
        else if (name==="chest") {
            coins+= num;
            console.log(`You found ${num} bitcoins.`)
        }
        else {
            hp-= num;
            if(hp<=0) {
                console.log(`You died! Killed by ${name}.`);
                console.log(`Best room: ${room}`);
                break;
            }
            else {
                console.log(`You slayed ${name}.`)
            }
        }
    }
    if(hp>0) {
            console.log("You've made it!");
            console.log(`Bitcoins: ${coins}`);
            console.log( `Health: ${hp}`);
    }
    
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
//dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
