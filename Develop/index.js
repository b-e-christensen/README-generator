// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')

// Series of questions presented to the user. Inputs of these questions go on to populate the markdown generator.
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
    name: 'github',
    message: "What is your GitHub user name for people to reach you with any additional questions?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email for people to reach you with any additional questions?",
  },
  {
    type: 'list',
    name: 'license',
    message: "What license would you like for this project?",
    choices: [ 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense' ]
  },
]);
};

// Runs the function that initialized asking the user all the questions, then generates the markdown and writes it to the file system. 
function init() {
  promptUser()
  .then((answers) => fs.writeFileSync('README.md', markdown.generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));
}

// Function call to initialize app
init();
