function shoppingList(arr) {

    let groceries= arr.shift().split('!');
    let item= '';
    let newItem='';
    let index= 0; 
    let length= arr.length-1;
    let command= '';
    let commands= []
    let position= 0;
    

    for(let i=0;i<=length;i++){
        commands= arr[index++]
        if(commands === 'Go Shopping!') {
            console.log(groceries.join(', '));
        }
        else{
            commands= commands.split(' ');
            command= commands[0]
            item= commands[1];

            if(command === 'Urgent' && !groceries.includes(item)){
                groceries.unshift(item);
            }
            else if(command === 'Unnecessary' && groceries.includes(item)){
                position= groceries.indexOf(item);
                groceries.splice(position,1);
            }
            else if(command === 'Correct' && groceries.includes(item)){
                newItem= commands[2];
                position= groceries.indexOf(item);

                groceries.splice(position,1,newItem);

            }
            else if(command === 'Rearrange' && groceries.includes(item)){
                position= groceries.indexOf(item)
                let replacement= groceries.splice(position,1)

                groceries.push(replacement)
            }
        }
    }

}
shoppingList((["Tomatoes!Potatoes!Bread",

"Unnecessary Milk",

"Urgent Tomatoes",

"Go Shopping!"]));
shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
);