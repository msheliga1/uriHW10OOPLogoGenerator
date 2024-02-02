class Shape {
    initials;
    color;
    bgColor;

    constructor(initials, color, bgColor) {
        // const uc = initials.toUpperCase(); 
        /// console.log("inits UC " + uc);
        this.initials = initials.toUpperCase();
        this.color = color;
        this.bgColor = bgColor;
    }

    // Standard setters
    setInitials(initials)   {this.initials = initials.toUpperCase();}
    getInitials()           {return this.initials;}
    setColor(color)         {this.color = color;}
    getColor()              {return this.color};
    setBGColor(bgColor)     {this.bgColor = bgColor;}
    getBGColor()            {return this.bgColor;}

    render() {
        const str = 'Shape.render called, but you must render a specific shape (ie. circle, square, etc.)'; 
        return str; 
    }

    log() {
        const str = `Shape: ` + this.constructor.name + `, Initials: ${this.initials}, Color: ${this.color}, bgColor: ${this.bgColor}`;
        console.log(str);
        return str;  // for testing purposes
    }
} // end class Shape

module.exports = Shape;
