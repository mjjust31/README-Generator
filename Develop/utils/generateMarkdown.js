// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license) {
//     // Return the corresponding license badge based on the license value
//     return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   } else {
//     return "";
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license) {
//     // Return the corresponding license link based on the license value
//     return `[License](https://opensource.org/licenses/${license})`;
//   } else {
//     return "";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license) {
//     // Return the license section with the license value
//     return `## License

//     This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
//       license
//     )}) for more information.`;
//   } else {
//     return "";
//   }
// }

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.ProjectName}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.dependencies}

  
  ## Usage
  ${data.about}
  
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}
  
  ## Questions
  For any questions, please contact me at ${data.email}.
  `;
}

module.exports = generateMarkdown;

// ## License
// ${renderLicenseSection(data.License)}
