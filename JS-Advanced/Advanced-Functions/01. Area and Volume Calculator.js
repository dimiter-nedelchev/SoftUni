function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input){

    let coordinates= JSON.parse(input);
   // let newObj= {};
    let result= [];

    for(let coordinate of coordinates){
       result.push({
        area: area.call(coordinate), 
        volume: vol.call(coordinate)
    });
    }
    return result;
}
solve(area, vol, `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`)