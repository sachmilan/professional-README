const inq = require('inquirer');
const fs = require('fs');

const questions =() =>{
return inq.prompt([
        {type:'input',
         name:'title',
         message: 'What is your project title?',
        },

        {type:'input',
         name:'description',
         message: 'Write a description of the application',
        },

        {type:'input',
         name:'installation',
         message: 'Type in installation instruction',
        },

        {type:'input',
         name:'usage',
         message: 'Type in usage information',
        },

        {type:'input',
         name:'guidelines',
         message: 'Type in contribution guidlines',
        },

        {type:'input',
         name:'instructions',
         message: 'Type in test instructions',
        },

        {type:'list',
         name:'license',
         message: 'Choose the license',
         choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
        },

        {type:'input',
         name:'yourName',
         message: 'What is your name?',
        },

        {type:'input',
         name:'emailAddress',
         message: 'what is your email address?',
        },

        {type:'input',
         name:'contribute',
         message: 'How you can cotribute',
        },

        {type:'input',
         name:'tests',
         message: 'How you can test it',
        },
    ])}

const generateReadme = ({title,description,installation,usage,guidelines,instructions,license,yourName,emailAddress, contribute,tests}) =>
`# ${title}

## License

![Github licence]${license}(http://img.shields.io/badge/license-${license})

## Description

${description}

## Table of Contents
* [installation](#installation)
* [Usage](#usage)
* [Guidelines](#guidelines)
* [Instructions](#instructions)
* [License](#license)
* [Contribute](#contribute)
* [Test](#tests)



## Guidelines
${guidelines}

## instuctions
${instructions}

## Installation
${installation}

## Usage
${usage}

## License
The project is licensed under${license}

## Contribute
${contribute}

## Tests
${tests}

## Contact
For more information you can contact me at ${emailAddress} and my name is ${yourName}.
`
const init = () =>{
    questions()
        .then((answers) => fs.writeFileSync('README1.md', generateReadme(answers)))
        .then(() => console.log('Successfully wrote to README1.md'))
        .catch((err) => console.error(err))};

init();