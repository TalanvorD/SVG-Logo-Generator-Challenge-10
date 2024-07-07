
/* class Shape {
    constructor(){
        this.backgroundColor = "";
    }
    setBackgroundColor(input){
        this.backgroundColor = "input";
    };
}; */

class Triangle { // Class constructor for the Triangle shape
    constructor() {
      this.backgroundColor = "";
    }

    setBackgroundColor(input){
        this.backgroundColor = "input";
    };

    render(){
        return (`<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />`);
    };
};

class Circle { // Class constructor for the Circle shape
    constructor() {
        this.backgroundColor = "";
      }
  
      setBackgroundColor(input){
          this.backgroundColor = "input";
      };
  
      render(){
          return (`circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" />`);
      };
};

class Square { // Class constructor for the Square shape
    constructor() {
        this.backgroundColor = "";
      }
  
      setBackgroundColor(input){
          this.backgroundColor = "input";
      };
  
      render(){
        return (`<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`);
        // rx="15" would give the rect rounded corners, possibly add that as an option to select
      };
    
    constructor() {
      this.name = 'Square';
    //shape for a square uses the rect tag but it just equal sides rx="15" gives the corners a rounded edge, do that as an option
    //   <rect x="120" width="100" height="100" rx="15" /> 
    
    }
};

module.exports = { Triangle, Circle, Square };