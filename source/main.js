const begin = Date.now(); // First Line

import {split as splitCode, run as runProgram} from './language/runner.js'

splitCode()
runProgram()

const end = Date.now(); // Last PROGRAM RUNNING, Line.

const timetaken = end
timetaken -= begin

var timeReport = document.createElement('p')
timeReport.innerHtml = timetaken.toString()
