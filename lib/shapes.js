class Shape {
    constructor(){
        this.backgroundColor = "";
    }
    setBackgroundColor(input){
        this.backgroundColor = input;
    };
};

class Triangle extends Shape { // Class constructor for the Triangle shape
    render(){
        return (`<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />`);
    };
};

class Circle extends Shape { // Class constructor for the Circle shape
      render(){
          return (`<circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" />`);
      };
};

class Square extends Shape { // Class constructor for the Square shape
      render(){
        return (`<rect x="50" y="50" width="200" height="200" fill="${this.backgroundColor}" />`);
        // rx="15" would give the rect rounded corners, possibly add that as an option to select
      };
};

module.exports = { Shape, Triangle, Circle, Square };