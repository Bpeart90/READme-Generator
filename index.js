const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "email",
            message: "what is your GitHub email?"
        },
        {
            type: "input",
            name: "title",
            message: "what is the project title?"
        },
        {
            type: "input",
            name: "usage",
            message: "what is the use of the application?"
        },
        {
            type: "input",
            name: "collaborator",
            message: "where ther any collaborators?"
        },
        {
            type: "list",
            name: "license",
            message: "what kind of license do you want to use?",
            choices: ["MIT", "Creative Commons Zero v1.0 Universal", "GNU General Public License v2.0", "Mozilla Public License 2.0"]
        },
        {
            type: "input",
            name: "test",
            message: "what is the code used to perform a test.?"
        },
        {
            type: "input",
            name: "repo",
            message: "what should a user know before using this repo?"
        },
    ])
}

async function writeToFile() {

    try {
        const answers = await promptUser();
        const readme = await generateReadme(answers);

        await writeFileAsync("readme.md", readme);

        console.log("Successfully wrote to readme.md");
    } catch (err) {
        console.log(err);
    }
}

writeToFile();
