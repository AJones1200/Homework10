// prmmpts inquirer
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')

    );
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter name.',
                name: 'name',
            },

            {
                type: 'input',
                message: 'Please enter id.',
                name: 'id',
            },

            {
                type: 'input',
                message: 'Please enter email address.',
                name: 'email',
            },

            {
                type: 'list',
                message: 'Please choose employee role.',
                name: 'role',
                choices: ["Employee", "Engineer", "Intern", "Manager", "Exit"],
            }
      {


        // Intern 
        {
            type: 'input',
            message: 'Please enter school.',
            name: 'school',
        },
    
        // Engineer
        {
            type: 'input',
            message: 'Please enter Github email.',
            name: 'github',
        },

        // Manager
        {
            type: 'input',
            message: 'Please enter office phone number.',
            name: 'officeNumber',
        },


        .then((response) => {
            console.log(response.name);
            console.log(response.id);
            console.log(response.email);
            console.log(response.role);
            console.log(response.school);
            console.log(response.github);
            console.log(response.officeNumber);

            writeToFile(generateMarkdown(response))
        });
}

// Function call to initialize app
init();


// create manager
// create intern or engin or quit?
// intern questions
// engineer questions

// final function creating templates