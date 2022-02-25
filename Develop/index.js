// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
const questions = [
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
    type: 'checkbox',
    name: 'license',
    message: "What license would you like for this project?",
    choices: [
      new inquirer.Separator(' = License = '),
        {
            name: 'Apache License 2.0',
        },
        {
            name: 'GNU General Public License v3.0',
        },
        {
            name: 'MIT License',
        },
        {
            name: 'BSD 2-Clause "Simplified" License',
        },
        {
            name: 'BSD 3-Clause "New" or "Revised" License',
        },
        {
            name: 'Boost Software License 1.0',
        },
        {
            name: 'Creative Commons Zero v1.0 Universal',
        },
        {
            name: 'Eclipse Public License 2.0',
        },
        {
            name: 'GNU Affero General Public License v3.0',
        },
        {
            name: 'GNU General Public License v2.0',
        },
        {
            name: 'GNU Lesser General Public License v2.1',
        },
        {
            name: 'Mozilla Public License 2.0',
        },
        {
            name: 'The Unlicense',
        },
    ]
  }
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers, null, '  ');
//   module.exports = {
//   license
// }
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
