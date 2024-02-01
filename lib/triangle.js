const Shape = require('./shape.js');

class Triangle extends Shape {
    // Shape class
    // properties: initials; color; bgColor;
    // roitines: standard setters, log, dummy render

    constructor(initials, color, bgColor) {
        super(initials, color, bgColor);
    }

    render( ) {
        console.log("Rendering Triangle");
        // this.log(); 
        let str =  `<polygon points="170, 5 330, 200 10, 200" fill="${this.bgColor}"/>`;
        // let str =  `<polygon points="150, 25 250, 200 50, 200" fill="blue"/>`;
        return str; 
    }

 } // end class Triangle

module.exports = Triangle;
