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

## Contributing 

${data.contributing}

## Tests 

${data.tests}

## GitHub

${data.github}

## Questions

If you have questions, please email me on ${data.questions}

## License 

${data.license}


`;
}

module.exports = generateMarkdown;
