function generateMarkdown(data) {
  return `
# ${answers.title}
# Readme.md

    * My GitHub email is ${answers.email}
    
    * Title ${answers.title}.
    
    * Lincense $${pickLicense(answers.license)}
       
    *My collaborators were ${answers.collaborator}
    
    *the purpose of the application is ${answers.linkedin}
    
    *Test: what is the code used to run a test ${answers.test}

    *Repo: ${answers.test}
    
    `;
}
const pickLicense = (license) => {
  if (license === "MIT") {
    return "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)"
  } else if (license === "CCO 1.0") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === "GPL v2") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (license === "MPL 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else (license === "No license")
  return "";
}


module.exports = generateMarkdown;
