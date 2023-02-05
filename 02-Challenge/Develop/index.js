// TODO: Include packages needed for this application
 const fs = require("fs");
 const inquirer = require('inquirer');
 const generateMarkdown = require("./utils/generateMarkdown")
 


// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "Project Title?",
        name: "title"
}, {
    type: "input",
        message: "Provide a detailed description of your project",
        name: "Description"
}, {
    type: "input",
        message: "Insert your Table of Contents",
        name: "Table of Contents"
}, {
    type: "input",
        message: "What additional data does the user need to install?",
        name: "Installation"
},{
    type: "input",
        message: "Intructions for use",
        name: "Usage"
}, {
    type: "input",
        message: "What license is being used",
        name: "License"
}, {
    type: "input",
        message: "Who are the project contributors?",
        name: "Contributing"
}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,function(err) {
        if(err){
            console.log('no good')
            throw err
        }
        console.log("file successfully created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
           writeToFile("Readme.md",generateMarkdown(data));
    })
}

// Function call to initialize app
init();

    
