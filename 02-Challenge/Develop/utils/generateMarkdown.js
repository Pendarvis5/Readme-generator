// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
      case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
      default:
      return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)'
      break;
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GNU':
      return '(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    default:
      return ' ';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// not sure what to put here since the license in table of contents should already return to the readme??
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return `# ${data.title}

  ## Table of Contents
  
  * [Project Description](#Description)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Installation](#Installation)
  * [License](#License)
  * [Questions](#Questions)

  ## Description
  ${data.Description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contributing
  ${data.contributing}

  ## License
  ${data.license}

  ## Questions
  To reach this user with any additional questions:
  ${data.github}

  ${data.email}
  
  
  
  `;

}

module.exports = generateMarkdown;
