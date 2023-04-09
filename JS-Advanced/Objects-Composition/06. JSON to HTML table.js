function jsonToHtml(json){

    let valueArray= [];
    let arr= JSON.parse(json);
    let outputArr= ["<table>"];

    outputArr.push(makeKeyRow(arr));
    makeValueRow(arr)
    outputArr.push("</table>");
    

    function makeKeyRow(arr){
        let result='   <tr>'
        Object.keys(arr[0]).forEach(key=>{
            result+= `<th>${escapeHtml(key)}</th>`
        }) 
        return result+= `</tr>`
    }

    function makeValueRow(arr){
        for(let person of arr){
            let result= '   <tr>'
            for(let key in person){
                result+=`<td>${escapeHtml(person[key])}</td>`
            }
            valueArray.push(result+= '</tr>');
            result= '';
        }
        for(let entry of valueArray){
            outputArr.push(entry)
        }
        return outputArr;
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    console.log(outputArr.join('\n'))
 
}
jsonToHtml(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);