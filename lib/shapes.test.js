const { Shape, Triangle, Square, Circle } = require("./shapes.js"); // Importing class constructors from shapes.js

describe('Shape', () => { // Tests the Shape constructor and the classes that inherit it.
describe('Triangle', () => { // Tests the Triangle class to make sure it returns the correct string for an SVG element.
    it('the render() function should return the appropriate string for a triangle SVG shape, background color, text and text color', () => {
        const triangleTestShape = new Triangle();
        triangleTestShape.setShapeProperties(this.text, this.textColor, this.backColor);
        expect(triangleTestShape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />
             <text x="150" y="125" font-size="60" text-anchor="middle" dominant-baseline="hanging" fill="${this.txtColor}">${this.txt}</text>`);
    });
});

describe('Square', () => { // Tests the Square class to make sure it returns the correct string for an SVG element.
    it('the render() function should return the appropriate string for a square SVG shape, background color, text and text color', () => {
        const squareTestShape = new Square();
        squareTestShape.setShapeProperties(this.text, this.textColor, this.backColor);
        expect(squareTestShape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="${this.backgroundColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" dominant-baseline="central" fill="${this.txtColor}">${this.txt}</text>`);
    });
});

describe('Circle', () => { // Tests the Circle class to make sure it returns the correct string for an SVG element.
    it('the render() function should return the appropriate string for a circle SVG shape, background color, text and text color', () => {
        const circleTestShape = new Circle();
        circleTestShape.setShapeProperties(this.text, this.textColor, this.backColor);
        expect(circleTestShape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>`);
    });
});
});