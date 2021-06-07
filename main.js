import layout from './layout.js'
import readlineSync from 'readline-sync';

layout();

const options = ["add", "list", "remove"];

let command;

let index = readlineSync.keyInSelect(options, "Type your command");

//console.log("Command: ",options[index]);
while(options[index]!==undefined){

    console.log(options[index]);

    index = readlineSync.keyInSelect(options, "Type your command");   
}

