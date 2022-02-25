// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

// choices: [
//   {
//       name: 'Apache License 2.0',
//   },
//   {
//       name: 'GNU General Public License v3.0',
//   },
//   {
//       name: 'MIT License',
//   },
//   {
//       name: 'BSD 2-Clause "Simplified" License',
//   },
//   {
//       name: 'BSD 3-Clause "New" or "Revised" License',
//   },
//   {
//       name: 'Boost Software License 1.0',
//   },
//   {
//       name: 'Creative Commons Zero v1.0 Universal',
//   },
//   {
//       name: 'Eclipse Public License 2.0',
//   },
//   {
//       name: 'GNU Affero General Public License v3.0',
//   },
//   {
//       name: 'GNU General Public License v2.0',
//   },
//   {
//       name: 'GNU Lesser General Public License v2.1',
//   },
//   {
//       name: 'Mozilla Public License 2.0',
//   },
//   {
//       name: 'The Unlicense',
//   },