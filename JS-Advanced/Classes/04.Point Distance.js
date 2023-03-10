class Point {
    constructor(x, y){
        this.x= x,
        this.y= y
    }
    static distance(p1,p2){
        let first= Math.pow(Math.abs(p1.x - p2.x), 2);
        let second= Math.pow(Math.abs(p1.y - p2.y), 2);
        return Math.sqrt((first + second));
    }
}
let p1 = new Point(5, 5);

let p2 = new Point(9, 8);
