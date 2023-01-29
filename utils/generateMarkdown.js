const { default: Choices } = require("inquirer/lib/objects/choices");
const gitHubURL = 'https://github.com/';

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]

## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [GitHub](#github)
  - [Questions](#questions)
  - [License](#license)

## Description

${data.description}

## Installation 

${data.installation}

## Usage 

${data.usage}
- Demo link - README Generator
https://drive.google.com/file/d/15R_nWKH0D3gufB9AYcgXkQBFQh59zkTd/view

## Contributing 

${data.contributing}

## Tests 

${data.tests}

## Questions

If you have questions, please contact me on ${data.questions} or via my GitHub [${data.github}](gitHubURL+${data.github})

## License 

${data.license}


`;
}

module.exports = generateMarkdown;
