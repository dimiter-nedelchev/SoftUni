function adAstra(input){

    const pattern= /([#|])(?<name>[A-za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let totalKcal= 0;
    const dailyIntake= 2000;

    let item= pattern.exec(input);

    while(item){
        totalKcal+= Number(item.groups['calories']);
        item= pattern.exec(input);
    }

    const days= Math.floor(totalKcal/dailyIntake)
    console.log(`You have food to last you for: ${days} days!`);

    let allItems= pattern.exec(input);

    while(allItems){
        const product= allItems.groups['name'];
        const expirationDate= allItems.groups['expirationDate'];
        const calories= allItems.groups['calories'];

        console.log(`Item: ${product}, Best before: ${expirationDate}, Nutrition: ${calories}`)

        allItems=pattern.exec(input);
    }

}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);