// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license === '') {
        return '';
    } else {
        return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === '') {
        return '';
    } else {
        return `[License](#license)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === '') {
        return '';
    } else {
        return `This project is licensed with a ${license} license.`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questionData) {
    const licenseBadge = renderLicenseBadge(questionData.license);
    const licenseSection = renderLicenseSection(questionData.license);
   
    return `
    # README file
  
    # ${questionData.title} 
  
    # ${licenseBadge}
  
    # This README is created by ${questionData.name}.
  
    ## Table of Contents:
  
    - [Description](#description) 
    - [Installation](#installation)  
    - [Usage](#usage)
    - [Contributions](#contributors) 
    - [License](#license) 
    
    ## Description
    
    ${questionData.description}
  
    ## Installation
    
    ${questionData.install}
  
    ## Usage
  
    ${questionData.usage}
  
    ## Contribution:
    
    ${questionData.contributors}
    
    ## License
    
    ${licenseSection}
    `;
}

module.exports = generateMarkdown;