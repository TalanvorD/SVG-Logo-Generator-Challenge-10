const { Shape, Triangle, Square, Circle } = require("./shapes.js"); // Importing class constructors from shapes.js

describe('Shape', () => { // Tests the Shape constructor and the classes that inherit it.
describe('Triangle', () => { // Tests the Triangle class to make sure it returns the correct string for an SVG element.
    it('the render() function should return the appropriate string for a triangle SVG shape and background color', () => {
        const triangleTestShape = new Triangle();
        triangleTestShape.setBackgroundColor(this.shapeColor);
        expect(triangleTestShape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`);
    });
});

describe('Square', () => { // Tests the Square class to make sure it returns the correct string for an SVG element.
    it('the render() function should return the appropriate string for a square SVG shape and background color', () => {
        const squareTestShape = new Square();
        squareTestShape.setBackgroundColor(this.shapeColor);
        expect(squareTestShape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />`);
    });
});

describe('Circle', () => { // Tests the Circle class to make sure it returns the correct string for an SVG element.
    it('the render() function should return the appropriate string for a circle SVG shape and background color', () => {
        const circleTestShape = new Circle();
        circleTestShape.setBackgroundColor(this.shapeColor);
        expect(circleTestShape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`);
    });
});
});