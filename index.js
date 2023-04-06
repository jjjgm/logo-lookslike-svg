const inquirer = require('inquirer');
// const path = require('path');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { SVG } = require('svg.js');

const Shape = require('./lib/shapes');


function promptUser() {
    inquirer.prompt(
        [
            {
                type: 'list',
                message: 'What shape would you like to start with?',
                name: 'shape',
                choices: ['Circle', 'Square', 'Triangle'],

            }
            ,
            {
                type: 'list',
                message: 'What size would you like the shape to be?',
                name: 'size',
                choices: ['Small', 'Medium', 'Large'],
            }
            ,
            {
                type: 'input',
                message: 'What color would you like the shape to be?',
                name: 'color',
            }
            ,
            {
                type: 'input',
                message: 'What text do you want inside the shape? Limit to 3 characters!',
                name: 'text',
            }
            ,
            {
                type: 'input',
                message: 'What color would like for the text?',
                name: 'textColor',
            }
        ]).then((answers) => {
            let shape = null; // initialize shape to null

            switch (answers.shape) {
                // Create the shape object based on user input
            }

            if (shape !== null) {
                shape.setColor(answers.color);
                const svg = SVG().addTo('body', '100%').size(500, 500);
                svg.add(shape.getShape());
                if (answers.text.length > 3) {
                    console.log('Please enter text limited to 3 characters');
                } else {
                    svg.text(answers.text).fill(answers.textColor).move(50, 50);
                    const mysvg = svg.svg();
                    writeToFile('mylogo', mysvg);
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function writeToFile(fileName, data) {
    const filePath = `./examples/${fileName}.svg`;
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Your ${fileName} logo has been created`);
    });
}

promptUser();