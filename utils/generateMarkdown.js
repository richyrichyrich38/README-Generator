// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents 

${data.contents}
`;
}

module.exports = generateMarkdown;
