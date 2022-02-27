// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input

/* Input required: 
1. Title
SECTIONS
2. Description
3. Table of Contents //dont need to ask a question for this one, but rather just generate anchor tags of inputs.
4. Installation
5. Usage
6. License
7. Contrubuting 
8. Tests
9. Questions
 */
const promptUser = () => {
  return inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Describe your project",
    },
  {
    type: 'input',
    name: 'installation',
    message: "How would a user go about installing your project?",
  },
  {
    type: 'input',
    name: 'contributing',
    message: "What are your contribution guidelines?",
  },
  {
    type: 'input',
    name: 'test',
    message: "What are your test instructions?",
  },
  {
    type: 'input',
    name: 'question',
    message: "How would you like people to reach you with any additional questions?",
  },
  {
    type: 'list',
    name: 'license',
    message: "What license would you like for this project?",
    choices: [ 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense' ]
  },
]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptUser()
  // .then((answers) => markdown.generateMarkdownLicensing(answers))
  // Use writeFileSync method to use promises instead of a callback function
  .then((answers) => fs.writeFileSync('README.md', markdown.generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
}

  // Use writeFileSync method to use promises instead of a callback function
//   .then((answers) => fs.writeFileSync('README.md', markdown.generateMarkdown(answers)))
//   .then(() => console.log('Successfully wrote to README.md'))
//   .catch((err) => console.error(err));
// 


// Function call to initialize app
init();
