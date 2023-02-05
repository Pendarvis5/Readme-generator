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
        name: "tableofContents"
}, {
    type: "input",
        message: "What additional data does the user need to install?",
        name: "installation"
},{
    type: "input",
        message: "Intructions for use",
        name: "usage"
}, {
    type: "list",
        message: "What license is being used",
        name: "license",
        choices: ['MIT License', 'Apache License', 'GNU General Public License'],
}, {
    type: "input",
        message: "Who are the project contributors?",
        name: "contributing"
       
}, { 
    type: "input",
        message: "Github username?",
        name: "github"
        
},{ 
    type: "input",
        message: "Email:",
        name: "email"

}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err){
            console.log('try again')
            throw err
        }
        console.log("file successfully created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(res) {
            const responses = generateMarkdown(res);
           writeToFile("Readme.md", responses);
    });
}

// Function call to initialize app
init();

    
