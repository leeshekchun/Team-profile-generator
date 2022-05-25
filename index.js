// getting packages and modules
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const renderHTML = require('./utils/generate-site');
const pageTemplate = require('./src/page-template');

let team = [];

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
// Promise chain
.then(function(response) {
  team.push(new Manager(response.managerName, response.managerID, response.managerEmail, response.managerNumber))
addTeam();
})
.catch(function(error) {
  console.log("There's an error")
})

}

// Next prompt
const generateTeam = (data) => {
pageTemplate(data)
}

// Add team members after manager prompt
const addTeam = () => {
    inquirer.prompt([
        {
          type: 'list',
          name: 'teamMembers',
          message: 'Please add an engineer or intern to the team',
          choices: ['Engineer', 'Intern', 'Done'],
          validate: teamMembersInput => {
            if (teamMembersInput) {
              return true;
            } else {
              console.log("You need to add at least one member in the team!");
              return false;
            }
          }  
        }
    ])

// Promise chain
.then(function(response) {
  if (response.teamMembers === 'Engineer') {
    promptEngineer();
  } else if (response.teamMembers === 'Intern') {
    promptIntern();
  } else if (response.teamMembers === 'Done') {
    generateTeam(team)
  }
})
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

// Promise chain
.then(function(response) {
  team.push(new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub))
addTeam()
  })
.catch(function(error) {
  console.log("There's an error")
  })

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

// Promise chain
.then(function(response) {
  team.push(new Intern(response.internName, response.internID, response.internEmail, response.internSchool))
addTeam()
  })
.catch(function(error) {
  console.log("There's an error")
  })

}

//  Start application
promptManager()

