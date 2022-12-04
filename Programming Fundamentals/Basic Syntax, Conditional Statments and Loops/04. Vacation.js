function vacation(group,type,day) {

    let totalPr=0;

    if (type==="Students") {
        if(day==="Friday") {
            totalPr=group*8.45;
        }
        else if (day==="Saturday") {
            totalPr=group*9.80;
        }
        else {
            totalPr=group*10.46;
        }
        if (group>=30) {
            totalPr=totalPr*0.85;
        }
    }
    else if (type==="Business") {
        if (day==="Friday") {
            totalPr=group*10.90;

            if (group>=100) {
                totalPr=(group-10)*10.90;
            }
        }
        else if (day==="Saturday") {
            totalPr=group*15.60;
            if (group>=100) {
                totalPr=(group-10)*15.60;
            }
        }
        else {
            totalPr=group*16
            if (group>=100) {
                totalPr=(group-10)*16;
            }
        }
        
    }
    else {
        if (day==="Friday") {
            totalPr=group*15;
        }
        else if (day==="Saturday") {
            totalPr=group*20;
        }
        else {
            totalPr=group*22.50;
        }
        if (group>=10 && group<=20) {
            totalPr=totalPr*0.95;
        }
    }
    console.log(`Total price: ${totalPr.toFixed(2)}`);
}
vacation(30,"Students","Sunday");
vacation(40,"Regular","Saturday");

