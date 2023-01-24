const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    name: "title",
    type: 'input',
    message: 'Enter title for project'
  },
  {
    name: "description",
    type: 'input',
    message: 'Enter description'
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() { 
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('demoReadme.md', markdown)
    })
  
}

// function call to initialize program
init();
