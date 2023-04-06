class SVG {
    constructor(color,text) {
        this.color = color;
        this.textElement = '';
        this.shapeElement = null;
    }
    setText(text,color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
        // this.color = color;
    }
    setShape() {
        this.shapeElement = shape;
    }
    render() {
        let svg = '';
        if (this.shape !==null) {
            svg = this.shape.render();
        }
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    }
    }

class Square extends SVG {
    constructor(size, color) {
        super();
        this.size = size;
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    // setPosition(x, y) {
    //     this.x = x;
    //     this.y = y;
    // }
    render() {
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
    }
}

let square = new Square();

let userShape;
    if (userShape === 'circle' || userShape === 'square' || userShape === 'triangle') {
        userShape = new Shape(userShape);
    }

module.exports = SVG

// function renderSVG(svg) {
//     switch (svg) {
//         case 'text':
//             return new Text();
//         case 'shape':
//             return new Shapee();
//         default: throw new Error("Invalid SVG type.");
//         }
//     }

// {SVG, Square, Error};
