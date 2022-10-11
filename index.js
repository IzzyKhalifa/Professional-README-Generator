const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
  },
  {
    type: "input",
    name: "install",
    message: "Enter the installation instructions:",
  },
  {
    type: "input",
    name: "use",
    message: "Enter the information on how to use this project:",
  },
  {
    type: "input",
    name: "guidelines",
    message: "Enter the contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Enter the test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Enter project license:",
    choices: ['MIT' , 'BSD' , 'GPL' , 'Apache'],
  },
  {
    type: "input",
    message: "Enter your github username:",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  console.log(data);
  const filename = `README.md`;
  fs.writeFile(filename, data, function (err) {
    err ? console.log(err) : console.log(filename + " created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile(generateMarkdown(data)));
}

// Function call to initialize app
init();
