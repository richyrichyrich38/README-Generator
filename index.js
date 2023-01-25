const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const chooseLicenseURL = 'https://choosealicense.com/';

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
  {
    name: "contents",
    type: 'input',
    message: 'Enter Table of Contents'
  },
  {
    name: "installation",
    type: 'input',
    message: 'Enter your installation details'
  },
  {
    name: "usage",
    type: 'input',
    message: 'Enter your usage details'
  },
  {
    name: "contributing",
    type: 'input',
    message: 'Enter your contribution details'
  },
  {
    name: "tests",
    type: 'input',
    message: 'Enter your test details'
  },
  {
    name: "license",
    type: 'input',
    message: 'Choose your license'
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() { 
  console.log('\nWelcome to the README generator\n-------------------------------');

  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('demoReadme.md', markdown)
    })
  
}

// function call to initialize program
init();
