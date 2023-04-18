function rectangle(width, height, color){

    color= color[0].toUpperCase() + color.substring(1);

    class Rectangle {
        constructor(width, height, color){
            this.width= width,
            this.height= height,
            this.color= color
        }
        calcArea() {
            return this.width * this.height
        }
    }
   return new Rectangle(width, height, color);
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
