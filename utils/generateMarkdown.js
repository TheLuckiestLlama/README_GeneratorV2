// This one does some stuff too
// TODO: Create a function that returns a license badge based on which license is passed in

const { default: ListPrompt } = require("inquirer/lib/prompts/list");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license = "None"){
        return;
    } else if (license = "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license = "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // console.log("The license is... " + data.license);
    renderLicenseBadge(data.license);
  return `# ${data.title}
    #Installation ${data.installation}
    #Usage ${data.usage}
    #Contributing ${data.contributing}
    #License ${data.license}`
}

module.exports = generateMarkdown;