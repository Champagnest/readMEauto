
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
switch (license) {
  case 'IPL':
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
    break;

    case 'ISC':
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
    break;

    case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    break;

    case 'MPL':
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
    break;

    case 'ODC':
    return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]'
    break;

    case 'perl':
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
    break;

    case 'unlicense':
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
    break;
}  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'IPL':
      return '(https://opensource.org/licenses/IPL-1.0)'
      break;
  
      case 'ISC':
      return '(https://opensource.org/licenses/ISC)'
      break;
  
      case 'MIT':
      return '(https://opensource.org/licenses/MIT)'
      break;
  
      case 'MPL':
      return '(https://opensource.org/licenses/MPL-2.0)'
      break;
  
      case 'ODC':
      return '(https://opendatacommons.org/licenses/by/)'
      break;
  
      case 'perl':
      return '(https://opensource.org/licenses/Artistic-2.0)'
      break;
  
      case 'unlicense':
      return '(http://unlicense.org/)'
      break;
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return ` This application is using ${license} for licensing. `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  Github: [${data.github}](https://github.com/${data.github}/)

  Questions? you can reach me at ${data.email}


`;
}

module.exports = generateMarkdown;
