const Shape = require('./shape.js');

class Square extends Shape {
    // Shape class
    // properties: initials; color; bgColor;
    // roitines: standard setters, log, dummy render

    constructor(initials, color, bgColor) {
        super(initials, color, bgColor);
    }

    // Standard setters
    setInitials(initials)   {this.initials = initials;}
    setColor(color)         {this.color = color;}
    setBGColor(bgColor)     {this.bgColor = bgColor;}

    render( ) {
        console.log("Rendering Square");
        // this.log(); 
        let str = `<rect x="25" y="40" width="225" height="225" fill=" ${this.bgColor} " />`;
        return str; 
    }

 } // end class Square

module.exports = Square;
