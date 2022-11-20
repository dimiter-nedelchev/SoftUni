function paintingEggs(input) {

    let size=input[0];
    let color=input[1];
    let amount=Number(input[2]);

    let totalPr=0;

    if (size==="Large") 
    {
        if (color==="Red") 
        {
            totalPr=amount*16;
        }
        else if (color==="Green") 
        {
            totalPr=amount*12;
        }
        else 
        {
            totalPr=amount*9;
        }
    }

    else if (size==="Medium") 
    {
        if (color==="Red") 
        {
            totalPr=amount*13;
        }
        else if (color==="Green")
        {
            totalPr=amount*9;
        }
        else 
        {
            totalPr=amount*7;
        }
    }
    else 
    {
        if (color==="Red") 
        {
            totalPr=amount*9;
        }
        else if (color==="Green") 
        {
            totalPr=amount*8;
        }
        else 
        {
            totalPr=amount*5;
        }
    }
    totalPr=totalPr*0.65;

    console.log(`${totalPr.toFixed(2)} leva.`)
}
paintingEggs (["Large","Red","7"])
paintingEggs (["Medium","Green","5"])
paintingEggs (["Small","Yellow","3"])
