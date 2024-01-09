// TODO: Include packages needed for this application

const inquirer = require("inquirer");


function promptUser() {
  return inquirer.prompt([
    { type: "input", message: "What is your Github username?", name: "name" },
    {
      type: "input",
      message: "what is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "checkbox",
      message: "What kind of license should your project have?",
      name: "userSelectedLicense",
      choices: ["MIT", "mpl-2-0", "unlicense", "apache-2-0"],
      default: "MIT",
      validate: function (input) {
        const done = this.async();
        if (input.length === 0) {
          done("you need to select your license!");
          return;
        }
        done(null, true);
      },
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "dependencies",
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
      name: "contributing",
    },
  ]);
}

module.exports = promptUser; 
