function theLift(arr){

let passengers=Number(arr[0]);
let newArr=arr[1].split(' ').map(Number);
let length=newArr.length-1
let totalSeats=newArr.length*4
let isFull=false;
let takenSeats=0;
let passengersLeft=passengers;

let initialSeats=0;

for(seats of newArr) {
    initialSeats+= seats;
}

for(let i=0;i<=length;i++){
    for(let j=newArr[i];j<=4;j++){
        if(newArr[i]<4 && passengers>0) {
        newArr[i]= newArr[i]+1;
        passengersLeft-= 1;
        takenSeats+= 1;
        if(passengersLeft<=0){
            isFull=true;
            break;
        }
        else{
            continue;
        }
    }
}
if(isFull){
    break;
}
}

if(passengersLeft===0 && takenSeats+initialSeats<totalSeats){
    console.log("The lift has empty spots!");
    console.log(newArr.join(' '));
}
else if(passengers>takenSeats){
    console.log(`There isn't enough space! ${passengersLeft} people in a queue!`);
    console.log(newArr.join(' '));
}
else {
    console.log(newArr.join(' '))
}
}
theLift(["15","0 0 0 0" ])
//theLift(["20","0 2 0"])