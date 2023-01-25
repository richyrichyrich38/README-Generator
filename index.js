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
    type: 'list',
    message: 'Choose your license',
    choices: [
      {
        name: 'Academic Free License v3.0',
        licenseKeyword: 'afl-3.0'
      },
      {
        name: 'Artistic license 2.0',
        licenseKeyword: 'artistic-2.0'
      },
      {
        name: 'Boost Software License 1.0',
        licenseKeyword: 'bsl-1.0'
      },
      {
        name: 'European Union Public License 1.1',
        licenseKeyword: 'eupl-1.1'
      },
      {
        name: 'MIT',
        licenseKeyword: 'mit'
      },
      {
        name: 'The Unlicense',
        licenseKeyword: 'unlicense'
      },
    ]
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
