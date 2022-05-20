// getting packages and modules
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const { writeFile } = require('./dist')

// New Manage prompt questions
const promptManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter the name of the team manager",
            validate: managerNameInput => {
                if (managerNameInput) {
                  return true;
                } else {
                  console.log('You need to enter a manager name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter manager's ID number",
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
            message: "Please enter manager's Email address",
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
            message: "Please enter manager's office number",
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

//  Start application
promptManager();