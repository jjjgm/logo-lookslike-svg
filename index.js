const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require('./lib/svg');

function run() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What shape would you like to start with?',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be?',
            name: 'color',
        },
        {
            type: 'input',
            message: 'What text do you want inside the shape? Limit to 3 characters!',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What color would like for the text?',
            name: 'textColor',
        },
    ]).then((answers) => // creating new variables from the answers to render the SVG
    {
        const shapeClassName = answers.shape;
        const shapeColor = answers.color;
        const text = answers.text;
        const textColor = answers.textColor;
        const svg = new SVG();

        let shape;
        switch (shapeClassName) {
            case 'Circle':
                shape = new Circle({ color: shapeColor });
                break;
            case 'Square':
                shape = new Square({ color: shapeColor });
                break;
            case 'Triangle':
                shape = new Triangle({ color: shapeColor });
                break;
        }
        shape.setColor(shapeColor);
        svg.setShape(shape);
        svg.setText(text, textColor);

        // Making a new folder with the paramaters to create the folder if it does not yet exist -- the folder will be 'examples' and will hold the new svg file.
        const dirName = 'examples';
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
        }

        // Creates a new file in the "examples" folder named: logo.sgv -- this will be the new svg file.
        const fileName = path.join(dirName, 'logo.svg');
        const content = svg.render();
        fs.writeFile(fileName, content, function (error) {
            if (error) {
                return console.log(error);
            }
            console.log(`Generated ${fileName}`);
        });
    });
}

// Calling back to the run function-- initializing the svg generator

run();

