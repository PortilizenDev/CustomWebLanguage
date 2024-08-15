const begin = Date.now(); // First Line

import {split as splitCode, run as runProgram} from './language/runner.js'

splitCode()
runProgram()

const end = Date.now(); // Last PROGRAM RUNNING, Line.

const timetaken = end
timetaken = timetaken - begin

const timeReport = document.createElement('p')
const node = document.createTextNode("This is new.");
timeReport.appendChild(node);

const element = document.getElementById("program");
element.appendChild(timeReport);

