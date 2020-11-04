const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt([

    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
        
    },
    {
        type: "input",
        name: "sentence",
        message: "Write a sentence, describing your project."
        
    },
    {
        type: "input",
        name: "description",
        message: "Write a detailed description of your project."
        
    },
    {
        type: "input",
        name: "installation",
        message: "installation instructions"
        
    },
    {
        type: "input",
        name: "usage",
        message: "What do you use your project for?"
        
    },
    {
        type: "checkbox",
        name: "license",
        message: "choose a license.",
        choices: [
            "ISC"
        ]  
    },
    {
        type: "input",
        name: "license",
        message:"input your badge URL here. for more info, go to https://shields.io/category/license"
    },
    {
        type: "input",
        name: "contributing",
        message: "how can you contribute?"
    },
    {
        type: "input",
        name: "authors",
        message:"who is the author of the project?"
    },
    {
        type: "input",
        name: "screenshot",
        message:"enter the URL screenshot or video"
    },
    {
        type: "input",
        name:"test",
        message: "run tests here"
    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "input",
        name: "githubURL",
        message: "what is your github profile URL?"
    },
    {
        type: "input",
        name: "linkedIn",
        message: "what is your linkedIn URL?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?"
    }







]).then(answers => {
    const { title, badge, sentence, description, installation, usage, contributing, screenshot , test, github, githubURL, authors, linkedIn, email, license} = answers;

const READMEfile = # ${title}
! [Github license](${badge})

### ${sentence}

## *Table of Contents*


})