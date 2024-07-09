class Shape {
    constructor(){
        this.backgroundColor = "";
        this.txt = "";
        this.txtColor = "";
    }
    setShapeProperties(text, textColor, backColor){
        this.backgroundColor = backColor;
        this.txt = text;
        this.txtColor = textColor;
    };
};

class Triangle extends Shape { // Class constructor for the Triangle shape
    render(txt, txtColor){
        return (`<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />
             <text x="150" y="125" font-size="60" text-anchor="middle" dominant-baseline="hanging" fill="${this.txtColor}">${this.txt}</text>`);
    };
};

class Circle extends Shape { // Class constructor for the Circle shape
      render(txt, txtColor){
          return (`<circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>`);
      };
};

class Square extends Shape { // Class constructor for the Square shape
      render(txt, txtColor){
        return (`<rect x="50" y="50" width="200" height="200" fill="${this.backgroundColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" dominant-baseline="central" fill="${this.txtColor}">${this.txt}</text>`);
      };
};

module.exports = { Shape, Triangle, Circle, Square };