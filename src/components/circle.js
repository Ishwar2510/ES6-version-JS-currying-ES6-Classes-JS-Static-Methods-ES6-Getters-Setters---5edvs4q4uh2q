// import using require

// declare class
class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this.radius=radius;
    }
    
    calculateArea(){
        return Math.PI*this.radius*this.radius;


}
}


// export class using module.exports