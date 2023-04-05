const inquirer = require('inquirer');
const fs = require('fs');
const fileSystem = require('./node_modules/graceful-fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
// const generateMarkdown = require('./shapes');
// console.log(generateMarkdown);

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
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.textElement = `<text x="10" y="10"></text>`
    }
}

let questions = [
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
        name:'size',
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
]

// function to write in user responses for later use
function writeToFile(fileName, data) {
    fileSystem.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Your selections have been saved!');
    });
}

// function to initialize creation of logo
function init() {
    let answers = inquirer.prompt(questions);
    

// function init() {
//     inquirer.prompt(questions)
//     .then((answers) => {
//             const markdown = generateMarkdown(answers);
//             console.log(answers)
//             writeToFile('logo.txt', logo);
//         })
}





// const App = require ('./lib/app');

// const app = new App ();

// app.run ();