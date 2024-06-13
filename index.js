// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
let readmeInput = " ";
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title?",
    name: "title",
    }, {
        type: "input",
        message: "How is it installed? ",
        name: "installation",
        }, {
            type: "input",
            message: "How is it used? ",
            name: "usage",
            }, {
                type: "input",
                message: "How can others contribute? ",
                name: "contributing",
                },{
                    type: "list",
                    message: "What license are you using?",
                    name: "license",
                    choices: ["MIT", "Apache 2.0", "None"], 
                }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) throw err;
        console.log("README created!");
    });
}
// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to README Generator V2!")
    inquirer
        .prompt(questions)
        .then((response) =>
        readmeInput = generateMarkdown(response))
        .then((readmeInput) => 
        console.log(readmeInput,
        writeToFile("README", JSON.stringify(readmeInput))))
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
