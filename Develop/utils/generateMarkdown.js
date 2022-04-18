const generateReadMe = ({title, description, installation, usage, contributing, test, license, github, email}) => {
  return `![License Badge](https://img.shields.io/badge/license-${license}-green)
  # ${title}  
 
 ## Table of Contents:

 [Description](#Description)  
 [Installation](#Installation)  
 [Usage](#Usage)  
 [Contributing](#Contributing)  
 [Tests](#Tests)  
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
 
   ## Tests: 
   
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
