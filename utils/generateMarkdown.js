
function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**

${data.badge}

## Description 

${data.description}

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 


## Installation

        ${data.installation}

## Usage

${data.usage}

## Licence

${data.licence}

## Contributors

${data.contributing}

## Test

${data.test}


## Repository

- [Project Repo](${data.repo})

## GitHub

- [user name] ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;



// // function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
