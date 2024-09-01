// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project:'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your Github username:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your application:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter a step-by-step description for any installation procedures needed for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any instructions on how to use the application:'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please enter any contributers who played a role in the creation of your application:'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0','IBM', 'Mozilla Public', 'Other', 'None']
    }

];

// TODO: Create a function to write README file

function writeToFile(data) {
    const markdown = generateMarkdown(data);
    fs.writeFile('READMEFileSample.md', markdown, (error) => {
        if (error) {
            console.error('An error occurred', error);
        } else {
            console.log('README file created successfully.');
        }
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
        .then(questionData => {
            writeToFile(questionData);
        })
}

// Function call to initialize app
init();