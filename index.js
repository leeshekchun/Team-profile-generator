// getting packages and modules
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const { writeFile } = require('./dist')

// New Manager prompt questions
const promptManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter team Manager's name",
            validate: managerNameInput => {
                if (managerNameInput) {
                  return true;
                } else {
                  console.log("You need to enter the Manager's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter Manager's ID number",
            validate: managerIDInput => {
                if (managerIDInput) {
                  return true;
                } else {
                  console.log('You need to enter an ID!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter Manager's Email address",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                  return true;
                } else {
                  console.log('You need to enter an Email address!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: "Please enter Manager's office number",
            validate: managerNumberInput => {
                if (managerNumberInput) {
                  return true;
                } else {
                  console.log('You need to enter an office number!');
                  return false;
                }
              }
        },
    ])
}

// // New Engineer prompt questions
const promptEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter Engineer's name",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                  return true;
                } else {
                  console.log("You need to enter the Engineer's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Please enter Engineer's ID",
            validate: engineerIDInput => {
                if (engineerIDInput) {
                  return true;
                } else {
                  console.log("You need to enter the Engineer's ID!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter Engineer's Email",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                  return true;
                } else {
                  console.log("You need to enter the Engineer's Email address!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter Engineer's GitHub username",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                  return true;
                } else {
                  console.log("You need to enter the Engineer's GitHub username!");
                  return false;
                }
              }
        },
    ])
}

//// New Intern prompt questions
const promptIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter Intern's name",
            validate: internNameInput => {
                if (internNameInput) {
                  return true;
                } else {
                  console.log("You need to enter the Intern's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internID',
            message: "Please enter Intern's ID",
            validate: internIDInput => {
                if (internIDInput) {
                  return true;
                } else {
                  console.log("You need to enter the Intern's ID!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter Intern's Email address",
            validate: internEmailInput => {
                if (internEmailInput) {
                  return true;
                } else {
                  console.log("You need to enter the Intern's Email address!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter Intern's school",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                  return true;
                } else {
                  console.log("You need to enter the Intern's school!");
                  return false;
                }
              }
        },
    ])
}

//  Start application
promptManager();