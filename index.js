// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title?",
    name: "Title",
    }, {
        type: "input",
        message: "How is it installed? ",
        name: "Installation",
        }, {
            type: "input",
            message: "How is it used? ",
            name: "Usage",
            }, {
                type: "input",
                message: "How can others contribute? ",
                name: "Contributing",
                }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to README Generator V2!")
    inquirer
        .prompt(questions)
        .then((response) =>
        console.log(response))
    }

    // inquirer
    //     .prompt({
    //         tpye: "input",
    //         message: "What is the title of this README? ",
    //         name: "Title",
    //     })
    //     .then((response) => 
    //     console.log(response))

// Function call to initialize app
init();
