// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

const questions = [
  { type: "input", message: "What is your Github username?", name: "name" },
  // {
  //   type: "input",
  //   message: "what is your email address?",
  //   name: "email",
  // },
  // {
  //   type: "input",
  //   message: "What is your project's name?",
  //   name: "ProjectName",
  // },
  // {
  //   type: "input",
  //   message: "Please write a short description of your project",
  //   name: "description",
  // },
  {
    type: "checkbox",
    message: "What kind of license should your project have?",
    name: "license",
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
  // {
  //   type: "input",
  //   message: "What command should be run to install dependencies?",
  //   name: "dependencies",
  //   default: "npm i",
  // },
  // {
  //   type: "input",
  //   message: "What command should run to run tests?",
  //   name: "test",
  //   default: "npm",
  // },
  // {
  //   type: "input",
  //   message: "What does the user need to know about using the repo?",
  //   name: "about",
  // },
  // {
  //   type: "input",
  //   message: "What does the user needs to know about contributing to the repo?",
  //   name: "contributing",
  // },
];

// TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
console.log(markdown.generateMarkdown);

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README file generated!");
    }
  });
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdownData = markdown.generateMarkdown(data);
    // console.log(markdownData);
    writeToFile("./example/README.md", markdownData);

    // console.log(data);
  });
}

// // Function call to initialize app
init();
