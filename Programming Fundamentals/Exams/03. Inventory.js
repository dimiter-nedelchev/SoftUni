function inventory(arr){

    let index= 0;
    let inventory= arr.shift().split(', ');
    let length= arr.length-1
    let commands= [];
    let position= 0;
    let item1=''
    let item2=''
    
    for(let i=0;i<=length;i++){
        commands= arr[index++].split(' - ')
        let command= commands[0];

        if(command === 'Craft!'){
            console.log(inventory.join(', '))
            break;
        }
      else if(command === 'Collect'){
        item1= commands[1]
        
        if(!inventory.includes(item1)){
            inventory.push(item1)
        }
      }
      else if(command === 'Drop'){
       item1= commands[1]

        if(inventory.includes(item1)){
            position= inventory.indexOf(item1);
            inventory.splice(position,1);
        }
      }
      else if(command === 'Combine Items'){
        let items= commands[1].split(':')
         item1= items[0];
         item2= items[1];

         if(inventory.includes(item1)) {
            position= inventory.indexOf(item1);
            inventory.splice(position + 1,0,item2);
         }
      }
      else{
        item1= commands[1];

        if(inventory.includes(item1)){
            position= inventory.indexOf(item1);
            let tempEl= inventory.splice(position,1)
            inventory.push(tempEl)
        }
      }
    }

}
//inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood',   'Craft!']);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );