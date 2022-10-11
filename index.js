const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions=[
  {
    type: "input",
    name: "name",
    message: "What is the name of the project",
  },
  {
    type: "input",
    name: "purpose",
    message: "What the app is for",
  },
  {
    type: "input",
    name: "use",
    message: "How to use the app",
  },
  {
    type: 'list',
    name: 'licenses',
    message: 'Which license are you using',
    choices: ['MIT License' , 'Apache License 2.0' , 'GNU License v3.0'],
  },
  {
    type: "checkbox",
    name: "report",
    message: "How to report issues",
    choices: ["Email", "Phone", "Slack"],
  },
  {
    type: "checkbox",
    name: "contributions",
    message: "How to make contributions",
    choices: ["Email", "Phone", "Slack"],
  }
]

// TODO: Create a function to write README file
function writeToFile() {
    const fileName = 'README.md';
    inquirer.prompt(questions)
    .then((response) => {  
        console.log("Generating a ReadMe");
        const markdown = generateMarkdown(response);
        console.log(markdown);
        fs.writeFileSync(fileName,response.toString());
});
    
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
    
}

// Function call to initialize app
init();
