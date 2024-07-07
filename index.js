const inquirer = require("inquirer"); // Imports to be used
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

const prompts = [ // Array of prompts for the user to provide information regarding the SVG logo to be generated
    {
      type: "input",
      message: "Enter a 3 character logo:",
      name: "svgTextLogo"
    },
    {
        type: "input",
        message: "What color would you like for the text? (Color keyword or hexadecimal number)",
        name: "svgTextColor"
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
        name: "svgShapeColor"
    }
];

