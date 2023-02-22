// // function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)

## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
If you have any questions send them [here](mailto:${data.contact}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.developer}](https://github.com/${data.developer}).
`;
}

module.exports = generateMarkdown;