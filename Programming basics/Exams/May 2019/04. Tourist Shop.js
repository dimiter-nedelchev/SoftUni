function touristShop (input) {

    let index=0
    let budget=Number (input [index++])
    let command=input [index++]

    let sum=0
    let itemBought=0

    let item=''
    let price=0
    let da

    while (command !== "Stop") {
        item=command
        price=Number (input[index++])

        itemBought+= 1
        if (itemBought%3==0) {
            price= price*0.5
        }
        
        sum+= price
        
        if (sum>budget) {
            console.log (`You don't have enough money!`)
            console.log (`You need ${(sum-budget).toFixed(2)} leva!`)
            break;
        }
        command=input [index++]

        if (command==="Stop") {
            console.log (`You bought ${itemBought} products for ${sum.toFixed(2)} leva.`)
            break;
        }
    }
}
//touristShop (["153.20","Backpack","25.20","Shoes","54","Sunglasses","30","Stop"])
//touristShop (["54","Thermal underwear","24","Sunscreen","45"])
//touristShop (["153.20","Backpack","25.20","Shoes","54","Sunglasses","30","Stop"])
touristShop (["54","Thermal underwear","24","Sunscreen","45"])

