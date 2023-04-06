const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
//const { SVG } = require("./lib/svg");
// const {SVG, Square, Error} = require('../lib/svg.js');
// const svg = new SVG(`${this.color}, ${this.text}`);

const generateSvg = require('./generateSvg');



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
    fs.writeFile(fileName, data, (err) => {
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





// // const App = require ('./lib/app');

// // const app = new App ();

// // app.run ();


