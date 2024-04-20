#! /usr/bin/env node



// Import the inquirer from inquirer

import inquirer from "inquirer";

// Import chalk from chalk
import chalk from "chalk";

console.log(chalk.blueBright.italic("\n \t Welcome to 'Asifa M.Qasim' - Word Counter \n"))


const answers : {
    Text : string
} = await inquirer.prompt
(
    [
        {
            name: "Text",
            type: "input",
            message: chalk.bgBlue.italic("Enter your text to count the word:")
        }
    ]
)
const  words = answers.Text.trim().split(" ")



console.log(words)

// Print the word count of the text to the console
console.log(chalk.bgBlue.bold(`Your text word count is ${words.length}`))