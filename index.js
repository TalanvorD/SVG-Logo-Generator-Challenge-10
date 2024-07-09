const inquirer = require("inquirer"); // Importing packages
const fs = require("fs");
const { Shape, Triangle, Square, Circle } = require("./lib/shapes.js");
const namedColors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod',  'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',  'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

const writeToFile = (text, textColor, shape, shapeColor) => { // Takes in the text for the logo, the text color, the shape and the shape color to create the SVG file
    let newShape; // Creates the newShape object using the class constructors
    if (shape === "Triangle"){
        newShape = new Triangle();
    } else if (shape === "Square"){
        newShape = new Square();
    } else newShape = new Circle();

    newShape.setShapeProperties(text, textColor, shapeColor);

    fs.writeFile('./examples/logo.svg', `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${newShape.render()}

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
        message: "What color would you like for the text? (Color keyword or a hexadecimal value i.e. #FFFFFF)",
        name: "svgTextColor",
        validate: (colorCheck) => {
            const numCheckRegEx = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/); // Regex for hexadecimal color value
            if (namedColors.includes(colorCheck.toLowerCase())){
                return true;
            } else if (numCheckRegEx.test(colorCheck)){
                return true;
                } else { return "Invalid color. Please enter a valid color keyword or a hexadecimal value i.e. #FFFFFF"; }
            }
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
        message: "What color would you like for the shape? (Color keyword or a hexadecimal value i.e. #FFFFFF)",
        name: "svgShapeColor",
        validate: (colorCheck) => {
            const numCheckRegEx = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/); // Regex for hexadecimal color value
            if (namedColors.includes(colorCheck.toLowerCase())){
                return true;
            } else if (numCheckRegEx.test(colorCheck)){
                return true;
                } else { return "Invalid color. Please enter a valid color keyword or a hexadecimal value i.e. #FFFFFF"; }
        }
    }
];

inquirer
  .prompt(prompts) // Prompting the user for information regarding the SVG file to be generated
  .then(response => { // Returns the response from the user and passes the values to be used
    writeToFile(response.svgTextLogo, response.svgTextColor, response.svgShape, response.svgShapeColor); // Calls the function to write the SVG file  
  })
  .catch((error) => {
    console.error('Error within the inquirer prompt', error);
  });