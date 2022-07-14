// import using require
const Shape=require("./shape"); 
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



// ReferenceError: Shape is not defined

//       2 | require("./shape"); 
//       3 | // declare class
//     > 4 | class Circle extends Shape{
//         |                      ^
//       5 |     constructor(color,radius){
//       6 |         super(color);
//       7 |         this.radius=radius;

//       at Object.<anonymous> (src/components/circle.js:4:22)
//       at Object.<anonymous> (src/__tests__/mockTest.js:2:16)

// FAIL src/__tests__/nonMockTest.js
//   ● Shape should have a property color, initialized with a value

//     TypeError: Shape is not a constructor

//        6 |   // now we have the original implementation,
//        7 |   // even if we set the automocking in a jest configuration
//     >  8 |   const instance = new Shape()
//          |                    ^
//        9 |   expect(instance.color).not.toBe(undefined);
//       10 |   console.log(instance.color)
//       11 | });

//       at Object.<anonymous> (src/__tests__/nonMockTest.js:8:20)

// Test Suites: 2 failed, 2 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        2.068 s
// Ran all test suites.