// MJS URI HW 10 2.1.24 - SVG Logo generator using fs, inquirier, jest testing and OOP.
// Include packages needed for this app
const fs = require('fs');
const inq = require('inquirer');
const Shape = require('./lib/shape.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');
const emailVal = require('email-validator');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log("Starting writeToFile ");   
    fs.writeFile(fileName, data, (err) => err  ? console.log("WriteFile Err: " + err)
                                                            : console.log("Success! Generated logo.svg"));
}

// ====== All Init Methods Next =========================
// TODO: Create a function to initialize app - and call the main inquirer .prompt routine. MJS 1.24.24
function init() {
    console.log("Welcome to Mike Sheliga's SVG LOGO file generator. \n");
    const questions = initQuestions();
    inq
    .prompt(questions)
    .then((ans) => {
        // console.log("Beginning .then");
        const shape = createShapeObject(ans);  // create circle, triangle, etc. 
        const shapeXML = shape.render( );
        let fileXML = '<?xml version="1.0" encoding="UTF-8" standalone="no"?> \n';
        fileXML += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">  \n';
        fileXML += '<svg width="400" height="400" viewBox="-70.5 -70.5 400 400" xmlns="http://www.w3.org/2000/svg" '; 
        fileXML += ' xmlns:xlink="http://www.w3.org/1999/xlink">  \n';
        fileXML += shapeXML + ' \n';
        fileXML += `<text x="75" y="175" font-size="50pt" font-wieght="bold" fill="${ans.color}">${shape.getInitials()}</text> \n`; 
        fileXML += "</svg> \n"; 
        // Great place to output entire file for debugging.
        console.log("The rendered logo.svg data is \n" + shapeXML + "\n");
        writeToFile('./examples/logo.svg', shapeXML); 
        console.log("The generated logo.xml data is \n" + fileXML);
        writeToFile('./examples/logo.xml', fileXML); 
    });
} // end function init

// based upon inquirer answers new the appropriate shape
function createShapeObject(ans) {
    let shape = undefined;
    if (ans.shape === "circle") { 
        shape = new Circle(ans.initials, ans.color, ans.bgColor);
    } else if (ans.shape === "square") { 
        shape = new Square(ans.initials, ans.color, ans.bgColor);
    } else if (ans.shape === "triangle") { 
        shape = new Triangle(ans.initials, ans.color, ans.bgColor);
    } else {
        // const shape = new Shape();  // Must be what you assigned the require to, NOT necessarily the class name.
        shape = new Shape(ans.initials, ans.color, ans.bgColor);
    }
    shape.log();
    return shape; 
}


function initQuestions() {
// TODO: Create an array of questions for user input
// Initials, Text color, shape type (circle, square, triangle), and background Color 
    const questions = [
        {
            type: 'input', message: 'Please enter LOGO initials:', name: 'initials',    },
        {
            type: 'input', message: 'Please enter text color:', name: 'color',        },
        {  // don't see how an object (w/ name, link and badge) can be stored here 
                type: 'rawlist', message: 'Please choose a shape:', name: 'shape', 
                default: '1', choices: ["circle", "square", "triangle"],        }, 
        {
            type: 'input', message: 'Please enter background color:', name: 'bgColor',        }, 
        // {   // there appears to be no email type in inquirer .. use validator instead.
         //   type: 'input', message: 'Please enter your email:', name: 'email', validate: emailVal.validate, }, 
    ];
  return  questions;
} // end initQuestions  

// Sample validation method no longer used
const myEV = (input) => {
    // console.log(" \n Running myEV");
    return true;
}

// =================== Begin the App by Calling Init ======================
// Function call to initialize app
init();