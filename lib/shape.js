class Shape {
    initials;
    color;
    bgColor;

    constructor(initials, color, bgColor) {
        this.initials = "MJS" + initials;
        this.color = color;
        this.bgColor = bgColor;
    }

    // Standard setters
    setInitials(initials)   {this.initials = initials;}
    setColor(color)         {this.color = color;}
    setBGColor(bgColor)     {this.bgColor = bgColor;}

    render(ans) {
        console.log("Hola");
        const str = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        return str; 
    }

    log() {
        console.log(`Shape: Initials: ${this.initials}, Color: ${this.color}, bgColor: ${this.bgColor}`);
    }

} // end class Shape

module.exports = Shape;
