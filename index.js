const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const chooseLicenseURL = 'https://choosealicense.com/';

// array of questions for user
const questions = [
  {
    name: "title",
    type: 'input',
    message: 'Enter title for project',
    default: 'README Generator'
  },
  // {
  //   name: "contents",
  //   type: 'input',
  //   message: 'Enter Table of Contents'
  // },
  {
    name: "description",
    type: 'input',
    message: 'Enter description',
    default: "A key component of your profile, and one that many new developers overlook, is the README file that's associated with each repository. A README file acts like a virtual storefront to a repository—it's the first thing that a person sees when they visit a repo on GitHub. But it's also much more than that: README files contain essential information about the repo's project. Thus, the quality of a README file can differentiate a high-quality repo from a low-quality one."
  },
  {
    name: "installation",
    type: 'input',
    message: 'Enter your installation details',
    default: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
  },
  {
    name: "usage",
    type: 'input',
    message: 'Enter your usage details',
    default: 'Provide instructions and examples for use. Include screenshots as needed.'
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
    name: "github",
    type: 'input',
    message: 'Enter your github repo',
    default: 'https://github.com/richyrichyrich38/README-Generator'
  },
  {
    name: "questions",
    type: 'email',
    message: 'Please input your email incase a user has questions',
    default: 'test@test.com'
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
      writeToFile('demoReadme.md', markdown);
      console.log('You README file is now ready!');
    })
  
}

// function call to initialize program
init();
