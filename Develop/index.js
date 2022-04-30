// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide text and examples of app usage here.',
       validate: usageInput => {
           if (usageInput) {
               return true;
           } else {
                console.log('Please add to this field');
                return false;
           }
       }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide steps for installing',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please add to this field');
                return false;
            }
        }
       
      },
      {
          type: 'list',
          name: 'license',
          message: 'Pick a license',
          choices: ['IPL','ISC', 'MIT', 'MPL', 'ODC', 'perl', 'unlicense',]
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'What are the rules for outside contributions?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('please add to this field');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do we test this?',
        validate: testsInput => {
            if (testsInput) {
              return true;
            } else {
              console.log('please add to this field');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('please add to this field');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Add your email here',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('please add to this field');
          return false;
        }
      }
  }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./readme.md', data, (err) => {
        if (err)
        console.log(err);
        else{
            console.log("Your readMe was made successfully")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(questions =>{
      const readmeData = generateMarkdown(questions);
      return readmeData;
      
    })
    .then(readmeData => {
      return writeToFile(readmeData);
    })
    .catch(err => {
      console.log(err);
    });
};

// Function call to initialize app
init() 
// .then(questions =>{
//     const readmeData = generateMarkdown(questions);

//     return readmeData;
    
//   })
//   .then(readmeData => {
//     return writeToFile(readmeData);
//   })
//   .catch(err => {
//     console.log(readmeData)
//     console.log(err);
// });