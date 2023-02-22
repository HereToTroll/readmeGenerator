const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");
// const filePath = path.join(__dirname,'files', 'README.MD');
// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project name",
    },
    {
        type: "input",
        name: "description",
        message: "Describe Project",
    },
    {
        type: "input",
        name: "link",
        message: "Input your project link",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose the license",
        choices: ["MIT","none","ISC","Apache 2.0","IPL 1.0"]
    },
    {
        type: "input",
        name: "test",
        message: "Provide test instructions",
    },
    {
        type: "input",
        name: "screenshot",
        message: "provide relative path of screenshot",
    },
    {
        type: "input",
        name: "developer",
        message: "Input your github username",
    },
    {
        type: "input",
        name: "contributors",
        message: "List contributors names",
        default: "",
    },
    
    {
        type: "input",
        name: "contact",
        message: "Provide contact email address",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    // error handlnig in something goes wrong
    // if (error) {
    //     throw console.error();
    // }

    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses)=>{
        console.log("Generating ReadMe..");
        writeToFile("./generated/README.md", generateMarkdown({...responses})); //
    });
}

// function call to initialize program
init();
