const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'purpose',
            message : 'What the app is for',
        },
        {
            type: 'input',
            name: 'use',
            message: 'How to use the app',
        },
        {
            type: 'input',
            name: 'report',
            message: 'How to report issues',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How to make contributions',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
