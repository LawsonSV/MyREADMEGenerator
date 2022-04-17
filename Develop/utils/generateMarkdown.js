// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  } else if (license = "MIT") {
    var licenseBadge = "[MIT](https://img.shields.io/badge/license-MIT-green)"
  } else if (license = "Apache 2.0") {
    var licenseBadge = "[Apache 2.0](https://img.shields.io/badge/license-Apache%202-blue)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateReadMe = ({title, description, installation, usage, contributing, test, license, github, email}) => {
  renderLicenseBadge()
  return `# ${title}  https://img.shields.io/badge/license-${license}-green
 
 ## Table of Contents:

 [Description](#Description)
 [Installation](#Installation)
 [Usage](#Usage)
 [Contributing](#Contributing)
 [Test](#Test)
 [License](#License)
 [Contact](#Contact)
 
   ## Description: 
   
   ${description}
 
   ## Installation:
   
   ${installation}
 
   ## Usage: 
   
   ${usage}
 
   ## Contributing: 
   
   ${contributing}
 
   ## Test: 
   
   ${test}
 
   ## License:
 
   This project is covered under the ${license} license.
 
   ## Contact:

   For further questions, visit my GitHub or contact me via email.

   Email: [email](mailto:${email}), 
   GitHub: [GitHub](https://github.com/${github})
   `
 }

module.exports = generateReadMe;
