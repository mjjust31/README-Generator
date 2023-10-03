// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "mpl-2-0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else if (license === "apache-2-0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Return the corresponding license link based on the license value
    return `[License](https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // Return the license section with the license value
    return `## License
    This project is licensed under the ${renderLicenseBadge(
      license)} license. Click [here]${renderLicenseLink(
      license
    )} for more information.`;
  } else {
    return "";
  }
}

// // TODO: Create a function to generate markdown for README

const generateMarkdown = function (data) {
  const {
    email,
    ProjectName,
    description,
    license,
    dependencies,
    test,
    about,
    contributing,
  } = data;

  return `
  # ${ProjectName}

  ## Description
  ${description}
  
  ## Installation
  ${dependencies}

  ## Usage
  ${about}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${test}
  
  ${renderLicenseSection(license)}

  ## Questions
  For any questions, please contact me at ${email}.
  `;
};

module.exports = { generateMarkdown };

// ## License
// ${renderLicenseSection(data.License)}
