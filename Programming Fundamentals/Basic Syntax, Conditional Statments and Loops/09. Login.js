function login (input) {

    let index=0
    let username=input[index++];

    let correctPass="";

    for (let i=username.length-1;i>=0;i--) {

        correctPass+= username[i];
    }

    let pass="";
    let blockCounter=0;
    while (pass!==correctPass) {
        pass=input[index++];

        if (pass!==correctPass) {
            blockCounter+= 1;

            if (blockCounter<4) {
                console.log("Incorrect password. Try again.");
            }
            else {
                console.log(`User ${username} blocked!`)
                break;
            }
        }
        else {
            console.log(`User ${username} logged in.`);
            break;
        }
    }
}
//login (['Acer','login','go','let me in','recA'])
//login (['momo','omom']);
login (['sunny','rainy','cloudy','sunny','not sunny']);