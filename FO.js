// we will be creating a file system organizer
//features of the project-
// if you have numerous files in a folder and they are not properly arranged
// so you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text file folder .exe file will go to application folder
// so at the end you will have a arranged set of files in specific folders


const fs = require("fs");
const path=require('path');
const helpMod=require('./commands/help')
const organizeMod=require('./commands/organize')
const treeMod=require('./commands/tree')

let input = process.argv.slice(2);
// console.log(input)
// slicing is used to get all data after ./FO.js


let command = input[0]; // tree organize help


switch (command) {
  case "tree":
    // treefn(input[1])
    treeMod.treeKey(input[1])
    break;

  case "organize":
    // organizefn(input[1]);
    organizeMod.organizeKey(input[1])
    break;

  case "help":
    helpMod.helpKey()
    break;

  default:
    console.log("please enter a valid command");
    break;
}

// help function


// organize function


    // tree function

    


