function generateMarkdown(answers) {
  return `
# ${answers.title}

Link: https://github.com/${answers.username}/${answers.title}

## Project description
${answers.description}

## Table of contents
1. [License](#license)
2. [Dependencies](#dependency)
3. [How to Use Repo](#howtouserepo)
4. [Collaborator](#collaborator)
5. [Tests](#tests)
6. [Contact Me](#contact)

### Lincense ${pickLicense(answers.license)}
the licesnse used for this project is ${answers.license}

### Dependecy
What code should be used to run required Depencies:
the code is ${answers.dependency}

### Repo
How should this Repo be used: ${answers.repo}

### Collaborator
Collaborators on this project are:
${answers.collaborator}

### Tests
To run tests, run the following command: 
${answers.test}

### contact
to contact the user creator of the repo please contact: Github Username: ${answers.username} or by email at ${answers.email}
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
