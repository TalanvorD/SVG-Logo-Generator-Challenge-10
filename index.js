const inquirer = require("inquirer"); // Imports to be used
const fs = require("fs");
const { Shape, Triangle, Square, Circle } = require("./lib/shapes.js");

const writeToFile = (text, textColor, shape, shapeColor) => { // Takes in the text for the logo, the text color, the shape and the shape color to create the SVG file
    let newShape;
    if (shape === "Triangle"){
        newShape = new Triangle();
    } else if (shape === "Square"){
        newShape = new Square();
    } else newShape = new Circle();

    newShape.setBackgroundColor(shapeColor);

    fs.writeFile('./examples/logo.svg', `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${newShape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`,
    (err) => err ? console.error(err) : console.log("Generated logo.svg"));
    return;
  };

const prompts = [ // Array of prompts for the user to provide information regarding the SVG logo to be generated
    {
      type: "input",
      message: "Enter a 3 or less character logo:",
      name: "svgTextLogo",
      validate: (textCheck) => {
        if (textCheck.length > 3){
            return "Too many characters. Please enter up to 3 characters.";
        } else { return true; }
      }
    },
    {
        type: "input",
        message: "What color would you like for the text? (Color keyword or hexadecimal number)",
        name: "svgTextColor",
        /*validate: (colorCheck) => { // Try to implement this test
            const result = new Option().style;
            result.color = colorCheck.toLowerCase();
            if (!result.color.length > 0){
                return "Invalid color. Please enter a valid color keyword or hexadecimal number:";
            } else { return svgTextColor.toLowerCase(); }
          }*/
    },
    {
        type: "list",
        loop: false,
        message: "Choose a shape for your logo:",
        choices: ["Triangle", "Circle", "Square"],
        name: "svgShape",
    },
    {
        type: "input",
        message: "What color would you like for the shape? (Color keyword or hexadecimal number)",
        name: "svgShapeColor",
        /*validate: (colorCheck) => { // Try to implement this test
            if (CSS.supports('color','colorCheck')){
                return "Invalid color. Please enter a valid color keyword or hexadecimal number:";
            } else { return true; }
          }*/
    }
];

inquirer
  .prompt(prompts) // Prompting the user for information regarding the SVG file to be generated
  .then(response => { // Returns the response from the user and passes the values to be used
    writeToFile(response.svgTextLogo, response.svgTextColor, response.svgShape, response.svgShapeColor); // Calls the function to write the SVG file   
    console.log(`${response.svgTextLogo} ${response.svgTextColor} ${response.svgShape} ${response.svgShapeColor}`);
  });