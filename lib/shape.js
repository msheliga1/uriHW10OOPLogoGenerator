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
    setBGColor(bgColor)     {this.bgColor = bgColor;}

    render() {
        const str = 'Shape.render callled, but you must render a specific shape (ie. circle, square, etc.)'; 
        return str; 
    }

    log() {
        console.log(`Shape: Initials: ${this.initials}, Color: ${this.color}, bgColor: ${this.bgColor}`);
    }

} // end class Shape

module.exports = Shape;
