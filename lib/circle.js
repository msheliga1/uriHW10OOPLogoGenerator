const Shape = require('./shape.js');

class Circle extends Shape {
    // Shape class
    // properties: initials; color; bgColor;
    // roitines: standard setters, log, dummy render

    constructor(initials, color, bgColor) {
        super(initials, color, bgColor);
    }

    // Standard setters - dont use these, only use parent classes!
    // setInitials(initials)   {this.initials = initials;}
    // setColor(color)         {this.color = color;}
    // setBGColor(bgColor)     {this.bgColor = bgColor;}

    render( ) {
        console.log("Rendering Circle");
        // this.log(); 
        // <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        // 	<rect x="25" y="25" width="200" height="200" fill="lime" stroke-width="4" stroke="pink" />
	    // <circle cx="125" cy="125" r="75" fill="orange" />   
        let str = '<circle cx="150" cy="150" r="140" fill="' + this.bgColor + '" />';
        return str; 
    }MJ

 } // end class Circle

module.exports = Circle;
