// prmmpts inquirer
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require("fs");
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')


// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter Manager name.',
                name: 'name',
            },

            {
                type: 'input',
                message: 'Please enter Manager id.',
                name: 'id',
            },

            {
                type: 'input',
                message: 'Please enter Manager email address.',
                name: 'email',
            },

            {
                type: 'input',
                message: 'Please enter office phone number.',
                name: 'officeNumber',
            },

            {
                type: 'list',
                message: 'Would you like to add a new employee?',
                name: 'role',
                choices: ["Engineer", "Intern", "Exit"],
            }])

        .then((response) => {
            console.log(response)
            if (response.role === "Exit") { return }
            else if (response.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Please enter Eng name.',
                        name: 'name',
                    },

                    {
                        type: 'input',
                        message: 'Please enter Eng id.',
                        name: 'id',
                    },

                    {
                        type: 'input',
                        message: 'Please enter Eng email address.',
                        name: 'email',
                    },

                    {
                        type: 'input',
                        message: 'Please enter Eng Github email.',
                        name: 'github',
                    }])

                .then((engineerResponse) => {
                    console.log(engineerResponse)
                }
                )
            }
            else if (response.role === "Intern") {
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Please enter Int name.',
                        name: 'name',
                    },

                    {
                        type: 'input',
                        message: 'Please enter Int id.',
                        name: 'id',
                    },

                    {
                        type: 'input',
                        message: 'Please enter Int email address.',
                        name: 'email',
                    },

                    {
                        type: 'input',
                        message: 'Please enter Int school.',
                        name: 'school',
                    },

                ]).then((internResponse) => {
                    console.log(internResponse)
                }
                )
            }
        }



            // Function call to initialize app
    )} init()
    
