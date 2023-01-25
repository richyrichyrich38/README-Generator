// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## TBC - Table of Contents

${data.contents}

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

## License 

${data.license}


`;
}

module.exports = generateMarkdown;
