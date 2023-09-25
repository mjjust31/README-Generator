// TODO: Include packages needed for this application
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

console.log(fs);
console.log(markdown);
console.log(inquirer);

inquirer
  .prompt([
    { type: "input", message: "What is your Github username?", name: "name" },
    {
      type: "input",
      message: "waht is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "ProjectName",
    },
    {
      type: "input",
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "checkbox",
      message: "What kind of license should your project have?",
      name: "license",
      choices: [
        "MIT",
        "Apache",
        "GNU General Public",
        "Boost Software",
        "Creative Commons Zero",
        "Mozilla Public",
        "The Unilicense",
      ],
      default: "MIT",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "depencies",
      default: "npm i",
    },
    {
      type: "input",
      message: "What command should run to run tests?",
      name: "test",
      default: "npm",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "about",
    },
    {
      type: "input",
      message:
        "What does the user needs to know about contributing to the repo?",
      name: "about",
    },
  ])
  .then((answers) => {
    console.log("answers", answers);
  });

// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
