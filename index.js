const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generatePage = require('./src/pageTemplate')
const style = require('./src/css/style.css')
const myTeam = [];

const managerInfo = () => {
    return inquirer.prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the manager's id?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "office",
            },
        ])
        .then(response => {
                const manager = new Manager(response.name, response.id, response.email, response.office);
                myTeam.push(manager);
        })
    };


const teamInfo = ()=> {
    return inquirer.prompt([
        {
            type: "list",
            message: "Choose employee job title",
            name: "role",
            choices: [
                "Engineer",
                "Intern",
                "Finished adding employees"
            ]
        },

        {
            message: "What is name of engineer?",
            name: "name",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "What is the engineer's ID?",
            name: "id",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "What is the engineer's email address?",
            name: "email",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "what is the engineer's GitHub username?",
            name: "github",
            when: ({role}) => role === "Engineer"
        },

        {
            message: "What is the intern's name?",
            name: "name",
            when: ({role}) => role === "Intern"
        },

        {
            message: "What is the intern's ID?",
            name: "id",
            when: ({role}) => role === "Intern"
        },

        {
            message: "What is the intern's email address?",
            name: "email",
            when: ({role}) => role === "Intern"
        },

        {
            message: "What is the intern's school?",
            name: "school",
            when: ({role}) => role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(response => {

        switch (response.role) {
            case "Engineer":
                const engineer = new Engineer(response.name, response.id, response.email, response.github);
                myTeam.push(engineer);
                break;
            case "Intern":
                const intern = new Intern(response.name, response.id, response.email, response.school);
                myTeam.push(intern);
                break;
        }
        if (response.confirmAddMember){
            return teamInfo()
        }

    })
}

managerInfo()
.then(teamInfo)
.then(() => generatePage(myTeam))

.then(pageHTML => {
    console.log(myTeam)
    return writeFile(pageHTML);
  })
.catch(err => {
    console.log(err);
  });


const writeFile = fileContent =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/index.html', fileContent, err =>{
            if(err){
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    });
};




