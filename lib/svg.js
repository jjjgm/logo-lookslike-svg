class Svg {
    constructor() {
        this.textElement =''
        this.shapeElement = '';
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    }

    setShapeElement(shape) {
        this.shapeElement=shape.render();
    }

    setTextElement(text, color) {
        this.textElement = `<text x="10" y="10"></text>`
    }
}

class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    render() {
        if (answers.text.length < 3 && answers.text.length > 0) {
            userText = answers.text;
        } else {
            throw new Error("Text must not exceed 3 characters.");
        return;
    }
}
userFontColor = answers.color;
userFillColor = answers.color;
userShape = answers.shape;

let userShape;
    if (userShape === 'circle' || userShape === 'square' || userShape === 'triangle') {
        userShape = new Shape(userShape);
    }
    else {
        throw new Error("Invalid Shape type.");
    }
    userShape.fillColor = userFillColor
}



// function renderSVG(svg) {
//     switch (svg) {
//         case 'text':
//             return new Text();
//         case 'square':
//             return new Square();
//         default: throw new Error("Invalid SVG type.");
//     }
// }



// function generateMarkdown(data) {
//     const userSVG = renderSVG(data.svg)
//     console.log(userSVG);
// }



