function rightPlace(string1,char,string2) {

    let result=string1.replace('_',char);

    let target=string2===result
    ? "Matched"
    : "Not Matched"

    console.log(target);
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
