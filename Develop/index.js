// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const { title } = require("process");
const generateReadMe = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter your project title:',
      name: 'title',
    },
    {
      type: 'input',
      message: "Describe you project:",
      name: 'description',
    },
    {
      type: 'input',
      message: "Enter your installation instructions:",
      name: 'installation',
    },
    {
      type: "input",
      message: "Enter your usage information:",
      name: "usage"
    },
    {
      type: "input",
      message: "Enter your contribution guidelines:",
      name: "contributing"
    },
    {
      type: "input",
      message: "Enter your test instructions:",
      name: "test"
    },
    {
      type: "list",
      message: "Choose your project license:",
      name: "license",
      choices: ["Apache", "GNU", "MIT", "ISC"]
    },
    {
      type: "input",
      message: "Enter you Github username:",
      name: "github"
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "email"
    },
  ])
  .then((answers) => {
    const readMePageContent = generateReadMe(answers);
    fs.writeFile('README.md', readMePageContent, (err) =>
err ? console.log(err) : console.log('Successfully created README.md!')
    )})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
