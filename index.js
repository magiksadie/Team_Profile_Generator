const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { stringify } = require("querystring");

const staff = [];
class StaffProfile {
    constructor() {}

    getManager() {
        console.log(`
        ========================================================
                Welcome to the Team Profile Generator!
        ========================================================
        `);
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your manager's name?",
                    validate: (managerName) => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter a name!");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is your manager's id?",
                    validate: (managerId) => {
                        if (managerId) {
                            return true;
                        } else {
                            console.log("Please enter an id!");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your manager's email?",
                    validate: (managerEmail) => {
                        if (managerEmail) {
                            return true;
                        } else {
                            console.log("Please enter an email!");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your manager's office number?",
                    validate: (managerOfficeNumber) => {
                        if (managerOfficeNumber) {
                            return true;
                        } else {
                            console.log("Please enter an office number!");
                            return false;
                        }
                    }
                }
            ]).then((managerData) => {
                let manager = new Manager(
                    managerData.name,
                    managerData.id,
                    managerData.email,
                    managerData.officeNumber
                );
                staff.push(manager);
                return this.chooseEmployeeType();
            })
    }
    chooseEmployeeType() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "employeeType",
                    message: "What type of employee would you like to add?",
                    choices: ["Engineer", "Intern", "I don't want to add any more employees"],
                    validate: (employeeType) => {
                        if (employeeType) {
                            return true;
                        } else {
                            console.log("Please choose an employee type!");
                            return false;
                        }
                    }
                }
            ]).then((employee) => {
                if (employee.employeeType === "Engineer") {
                    console.log(`
                    ========================================================
                        Please answer some questions about the engineer!
                    ========================================================`);
                    return this.getEngineer();
                } else if (employee.employeeType === "Intern") {
                    console.log(`
                    ========================================================
                        Please answer some questions about the intern!
                    ========================================================`);
                    return this.getIntern();
                } else if (employee.employeeType === "I don't want to add any more employees") {
                    console.log(`
                    =======================================================
                            Congrats! Your team profile is ready!
                    =======================================================`);
                }
                return staffDataOutput();
                })      
            }
    getEngineer() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your engineer's name?",
                validate: (engineerName) => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log("Please enter a name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is your engineer's id?",
                validate: (engineerId) => {
                    if (engineerId) {
                        return true;
                    } else {
                        console.log("Please enter an id!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your engineer's email?",
                validate: (engineerEmail) => {
                    if (engineerEmail) {
                        return true;
                    } else {
                        console.log("Please enter an email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's github?",
                validate: (engineerGithub) => {
                    if (engineerGithub) {
                        return true;
                    } else {
                        console.log("Please enter a github!");
                        return false;
                    }
                }
            }
        ]).then((engineerData) => {
            let engineer = new Engineer(
                engineerData.name,
                engineerData.id,
                engineerData.email,
                engineerData.github
            );
            staff.push(engineer);
            return this.chooseEmployeeType();
        })
    }
    getIntern() {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your intern's name?",
                validate: (internName) => {
                    if (internName) {
                        return true;
                    } else {
                        console.log("Please enter a name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is your intern's id?",
                validate: (internId) => {
                    if (internId) {
                        return true;
                    } else {
                        console.log("Please enter an id!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email?",
                validate: (internEmail) => {
                    if (internEmail) {
                        return true;
                    } else {
                        console.log("Please enter an email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is your intern's school?",
                validate: (internSchool) => {
                    if (internSchool) {
                        return true;
                    } else {
                        console.log("Please enter a school!");
                        return false;
                    }
                }
            }
        ]).then((internData) => {
            let intern = new Intern(
                internData.name,
                internData.id,
                internData.email,
                internData.school
            );
            staff.push(intern);
            return this.chooseEmployeeType();
        })
    }
};

const profile = new StaffProfile();
profile.getManager();

let teamPage = require('./src/page.template');

function staffDataOutput(staff) {
    fs.writeFile('./dist/index.html', teamPage , function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
};
