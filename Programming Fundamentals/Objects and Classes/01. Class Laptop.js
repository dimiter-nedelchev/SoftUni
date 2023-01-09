function laptopClass(){

    class Laptop {
        constructor(info, quality){
            this.info= info,
            this.isOn= false,
            this.turnOn= function turnOn(){
                this.isOn= true;
                this.quality--
                this.price= (800 - (this.info.age * 2) + (this.quality * 0.5))
            }
            this.turnOff= function turnOff(){
                 this.isOn=false;
                 this.quality--
                 this.price= (800 - (this.info.age * 2) + (this.quality * 0.5))
            }
            this.showInfo= function showInfo(){
                let information= JSON.stringify(this.info);
                return information;
            }
            this.quality= quality;
            this.price= (800 - (this.info.age * 2) + (this.quality * 0.5));            
        }
    }


    let info = {producer: "Lenovo", age: 1, brand: "Legion"}
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    laptop.turnOn()
    laptop.turnOff()
    console.log(laptop.isOn)
    
}
laptopClass();