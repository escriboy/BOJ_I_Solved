const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);
const D = parseInt(inputData[3]);
const E = parseInt(inputData[4]);
const F = parseInt(inputData[5]);

console.log(`${1 - A} ${1 - B} ${2 - C} ${2 - D} ${2 - E} ${8 - F}`);
