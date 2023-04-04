const inquirer = require('inquirer');
const fs = require('fs');

let questions = [
    {
        type: list,
        message: 'What shape would you like to start with?',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        
    }
    ,
    {
        type: list,
        message: 'What color would you like the shape to be?',
        name: 'color',
        choices: ['Red', 'Green', 'Blue', 'White', 'Black'],
    }
    ,
    {
        type: list,
        message: 'What size would you like the shape to be?',
        name:'size',
        choices: ['Small', 'Medium', 'Large'],
    }
    ,
    {
        type: input,
        message: 'What text do you want inside the shape?',
        name: 'text',
    }
    ,
    {
        type: list,
        message: 'What color would like for the text?',
        name: 'textColor',
        choices: ['Red', 'Green', 'Blue', 'White', 'Black'],
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
    inquirer.prompt(questions)
    .then((answers) => {
            const markdown = generateMarkdown(answers);
            console.log(answers)
            writeToFile('logo.txt', logo);
        })
}