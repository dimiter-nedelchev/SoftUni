function easterShop(input) {

    let index=0;
    let eggs=Number(input[index++]);
    let command=input[index++];

    let amount=0;

    let eggsSold=0;

    while (command!="Close") 
    {
        amount=Number(input[index++])

        if (command==="Buy") 
        {
           if (eggs>=amount) 
           {
            eggs-= amount;
            eggsSold+= amount;
           }
           else 
           {
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${eggs}.`);
            break;
           }
        }
        else if (command==="Fill")
        {
            eggs+= amount;
        }
        command=input[index++];

        if (command==="Close") 
        {
            console.log(`Store is closed!`);
            console.log(`${eggsSold} eggs sold.`);
        }
    }

}
//easterShop (["13","Buy","8","Fill","3","Buy","10"])
easterShop (["20","Fill","30","Buy","15","Buy","20","Close"])
