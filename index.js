// prmmpts inquirer
// TODO: Include packages needed for this application
const util = require('util');
const inquirer = require('inquirer');
const path = require('path');
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile)
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')
const engineerArray = []
const internArray = []
const managerArray = []
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

           ])

        .then((response) => {
            const {name, id, email, officeNumber} = response
            const manager = new Manager(name, id, email, officeNumber)
            managerArray.push(manager)
            choices()
           
        }


            // Function call to initialize app
    )} 

    function declareEngineer() {
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
            const {name, id, email, github} = engineerResponse
            const engineer = new Engineer(name, id, email, github)
            engineerArray.push(engineer)
            choices()
        }
        )
    }

    function declareIntern() {
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
            const {name, id, email, school} = internResponse
            const intern = new Intern(name, id, email, school)
            internArray.push(intern)
            choices()
        }
        )
    }

    function choices() {
        inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add a new employee?',
            name: 'role',
            choices: ["Engineer", "Intern", "Exit"],
        }])
        .then((response) => {
            console.log(response)
            if (response.role === "Exit") {
                writeFileAsync("./dist/index.html",createTeam(), "utf-8")}
            else if (response.role === "Engineer") {
                declareEngineer()
            }
            else if (response.role === "Intern") {
                declareIntern()
            }
        })
    }

    init()
// When exit is chosen, create html with employee info cards
// append document body etc??
function createTeam() {
    var engineer = createEngineerCard()
    var intern = createInternCard()
    var manager = createManagerCard()
    var team = manager + engineer + intern
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>Team Profile Generator</h2>
        <section class="teamCards">
    ${team}
        </section>
    </body>
    </html>`

}



function createEngineerCard() {
    const engineerCards = engineerArray.map(engineer => {
        return `<div>
        <ul>
        <li>${engineer.name}</li>
        <li>${engineer.getRole()}</li>
        <li>${engineer.id}</li>
        <li>${engineer.email}</li>
        <li>${engineer.github}</li>
        </ul>
        </div>`
    })
return engineerCards.join(" ")}

function createInternCard() {
    const internCards = internArray.map(intern => {
        return `<div>
        <ul>
        <li>${intern.name}</li>
        <li>${intern.getRole()}</li>
        <li>${intern.id}</li>
        <li>${intern.email}</li>
        <li>${intern.school}</li>
        </ul>
        </div>`
    })
return internCards.join(" ")
}

function createManagerCard() {
    const managerCards = managerArray.map(manager => {
        return `<div>
        <ul>
        <li>${manager.name}</li>
        <li>${manager.getRole()}</li>
        <li>${manager.id}</li>
        <li>${manager.email}</li>
        <li>${manager.officeNumber}</li>
        </ul>
        </div>`
    })
return managerCards.join(" ")
}

