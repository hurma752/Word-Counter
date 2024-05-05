#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence.",
    },
]);
let action = await inquirer.prompt([
    {
        name: "yourAction",
        type: "list",
        message: "What do you want to do with the sentence?",
        choices: [
            "Count words",
            "Find the longest word",
            "Character count",
            "Sentence case conversion (lowercase)",
            "Sentence case conversion (uppercase)",
        ],
    },
]);
if (action.yourAction === "Count words") {
    let word = answer.sentence.trim().split(" ");
    console.log(chalk.blue(`Your sentence word count is ${word.length}`));
}
else if (action.yourAction === "Find the longest word") {
    let words = answer.sentence.trim().split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    console.log(chalk.green(`The longest word is: ${longestWord}`));
}
else if (action.yourAction === "Character count") {
    let characterCount = answer.sentence.length;
    console.log(chalk.blue(`The character count is: ${characterCount}`));
}
else if (action.yourAction === "Sentence case conversion (lowercase)") {
    let convertedSentence = answer.sentence.toLowerCase();
    console.log(chalk.yellow(`The sentence in lowercase is: ${convertedSentence}`));
}
else if (action.yourAction === "Sentence case conversion (uppercase)") {
    let convertedSentence = answer.sentence.toUpperCase();
    console.log(chalk.yellow(`The sentence in uppercase is: ${convertedSentence}`));
}
