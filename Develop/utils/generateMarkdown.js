// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
      case 'Apache 2.0':
        return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      case 'GNU General Public License v3.0':
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      case 'BSED 2-Clause':
        return 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
      case 'BSD 3-Clause':
        return 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
      case 'Boost Software':
        return 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
      case 'Creative Commons Zero':
        return 'https://licensebuttons.net/l/zero/1.0/80x15.png'
      case 'Mozilla Public License 2.0':
        return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
      default:
        return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
      return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU General Public License v3.0') {
      return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSED 2-Clause') {
      return 'https://opensource.org/licenses/BSD-2-Clause';
  } else if (license === 'BSED 3-Clause') {
      return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'Boost Software') {
      return 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === 'Creative Commons Zero') {
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
  } else if (license === 'Mozilla Public License 2.0') {
      return 'https://opensource.org/licenses/MPL-2.0';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    const licenseLink = renderLicenseLink(license);

    return `This project is licensed under ${license} 
    Click this link for more information about this license: [${license}](${licenseLink})
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `## ${data.title} ![License Badge](${licenseBadge})


  ## Description
  ${data.description}


  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## License
  ${renderLicenseSection(data.license)}


  ## Contributing
  ${data.contributionGuidelines}


  ## Tests
  ${data.testInstructions}
  

  ## Questions
  If you have any questions, you can email me: ${data.email}. Visit my GitHub profile at https://github.com/${data.github}.
  `;
}

export default generateMarkdown;
