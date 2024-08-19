// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Contribution guidelines:',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project license:',
        choices: ['MIT', 'Apache 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero', 'Mozilla Public License 2.0', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Your README file has been generated.')
    );
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
    });
}
// Function call to initialize app
init();
