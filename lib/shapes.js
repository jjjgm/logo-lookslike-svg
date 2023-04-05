class Shape {
    constructor() {
        // this.shape = shape;
        this.text = '';
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}


class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill=${this.color} />`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill=${this.color}/>`
    }
}

// function renderShape(shape) {
//     switch (shape) {
//         case 'circle':
//             return new Circle();
//         case 'square':
//             return new Square();
//         case 'triangle':

//             return new Triangle();
//     }
// }

// function generateMarkdown(data) {
//     const userShape = renderShape(data.shape)
//     console.log(userShape);
// }



module.exports = {Circle, Triangle, Square}

