function easterDecoration (input) {

let index=0;
let clients=Number(input[index++]);
let command=input[index++]

let counter=0;
let price=0;
let total=0;

let product="";

for (let i=1;i<=clients;i++) 
{
    while (command!="Finish") 
    {
        product=command;

        if (product==="basket") 
        {
            price+= 1.5;
            counter++;
        }
        else if (product==="wreath") 
        {
            price+= 3.8;
            counter++;
        }
        else if (product==="chocolate bunny") 
        {
            price+= 7;
            counter++;
        }

        command=input[index++];
        if (command==="Finish") 
        {
            if (counter%2==0) 
            {
                price=price*0.8;
            }
            total+= price;
            console.log(`You purchased ${counter} items for ${price.toFixed(2)} leva.`)
            price=0;
            counter=0;
        }
    }
    if (i<clients) 
    {
        command=input[index++];
    }
}
console.log(`Average bill per client is: ${(total/clients).toFixed(2)} leva.`)
}
//easterDecoration (["2","basket","wreath","chocolate bunny","Finish","wreath","chocolate bunny","Finish"])
easterDecoration (["1","basket","wreath","chocolate bunny","wreath","basket","chocolate bunny","Finish"])
