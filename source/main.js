import {split as splitCode, run as runProgram} from './language/runner.js'

splitCode()
runProgram()

const timeReport = document.createElement('p')
const node = document.createTextNode("This is new.");
timeReport.appendChild(node);

const element = document.getElementById("program");
element.appendChild(timeReport);

