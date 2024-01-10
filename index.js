// TODO: Include packages needed for this application
const fs = require("fs");
// const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
// const path = require("path");
const promptUser = require("./utils/inquirer");


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README file generated!");
    }
  });
}


function init() {
  promptUser().then((data) => {
    const markdownData = markdown.generateMarkdown(data);
    // console.log(markdownData);
    writeToFile("./generated-README/README.md", markdownData);
    // console.log(data);
  });
}

init();
