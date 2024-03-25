#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userNumber",
    type: "number",
    message: "Guess a number between 1 to 6:",
  },
]);

if(answer.userNumber === randomNumber){
    console.log("Congrats you guessed it right!")
} else {
    console.log("Oops! Try Again.")
}
