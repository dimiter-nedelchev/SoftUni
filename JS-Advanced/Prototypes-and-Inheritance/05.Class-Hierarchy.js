function classHierarchy(){
class Figure {
    constructor(units = 'cm'){
        this.units= units;
    }
    get area(){
        if(this.constructor.name == 'Circle'){
            let radius= this.metricConversion(this.radius);
            return this.Area= Math.PI*(Math.pow(radius, 2))
        }

        let width= this.metricConversion(this.width);
        let height= this.metricConversion(this.height);    
        return this.Area= width*height;
    }
    metricConversion (num) {
        if(this.units == 'm'){
            return num*= 0.01;
        }
        else if(this.units == 'mm'){
            return num*= 10;
        }
        return num;
    }
    changeUnits(units){
        return this.units= units;
    }
    toString(){
        if(this.constructor.name == 'Circle'){
            return `Figures units: ${this.units} Area: ${this.Area} - radius: ${this.metricConversion(this.radius)}`
        }
        else if(this.constructor.name == 'Rectangle'){
            return `Figures units: ${this.units} Area: ${this.Area} - width: ${this.metricConversion(this.width)}, height: ${this.metricConversion(this.height)}`
        }
        return `Figures units: ${this.units}`
    }
}

class Circle extends Figure {
    constructor(radius){
        super();
        this.radius= radius;
    }
}

class Rectangle extends Figure {
    constructor(width, height, units){
        super(units);
       this.width= width,
       this.height= height
    }
}

return {
    Figure,
    Rectangle,
    Circle
}
}

