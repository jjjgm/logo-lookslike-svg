class SVG {
    constructor() {
        this.shape = shape
    }
    setText (text) {
        this.text = text;
        console.log(this.text);
    }
    setColor (color) {
        this.color = color;
    }
}

class Element extends SVG {
    render () {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'`
    }
}

class TextElement extends SVG {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`;
    }
}

class MessageColor extends SVG {
    render () {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
    }
}

function renderSvg (svg) {
    switch (svg) {
    case 'text':
        return new Element();
    case 'color':
        return new TextElement();
    case 'color':
        return new MessageColor();
    }
}