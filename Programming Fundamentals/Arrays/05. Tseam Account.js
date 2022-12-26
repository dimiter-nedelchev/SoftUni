function tseamAccount(array) {

    let games=array.shift();
    let gameLibrary=[];
    gameLibrary.push(games);
    gameLibrary=gameLibrary[0].split(' ')
    
    let index=0;
    let command=array[index++]

    let commandArr=[]

    let name='';
    let order='';

    let update=''
    let expansionArr=[]

    let expansionN1=''
    let expansionN2=''

    while(command!=='Play!') {
        commandArr=[];
        commandArr.push(command);
        commandArr=commandArr[0].split(' ')

        name=commandArr[1];
        order=commandArr[0]; 

        if(order==="Install" && !gameLibrary.includes(name)) {
            gameLibrary.push(name);
        }

        else if(order==='Uninstall' && gameLibrary.includes(name)) {
            
            gameLibrary=gameLibrary.filter(game=>game!==name)
        }
        else if (order==='Update' && gameLibrary.includes(name)) {
            update=name;
            gameLibrary=gameLibrary.filter(game=>game!==name);
            gameLibrary.push(update);
        }
        else if (order==='Expansion') {
                expansionArr=[];
                expansionArr.push(name);
                expansionArr=expansionArr[0].split('-');
                let expansion=expansionArr[0]

                for(let index=0;index<=gameLibrary.length-1;index++) {
                    
                    if(expansion===gameLibrary[index]) {
                        expansionArr=expansionArr.join(':');
                        gameLibrary.splice(index+1,0,expansionArr);
                        break;
                    }
                }

        }
        command=array[index++]
    }
    console.log(gameLibrary.join(' '))
}
tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!']);
//tseamAccount(['CS WoW Diablo','Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V','Play!'])