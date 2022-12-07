function reverseString(string) {

    let total="";

    for (let i=string.length;i>=1;i--) {
        total+= string[i-1];
    }
    console.log(total)
}
reverseString("Hello");