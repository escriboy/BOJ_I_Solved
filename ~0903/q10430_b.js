const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);

let answer1 = (A + B) % C;
let answer2 = ((A % C) + (B % C)) % C;
let answer3 = (A * B) % C;
let answer4 = ((A % C) * (B % C)) % C;


console.log(`${answer1}\n${answer2}\n${answer3}\n${answer4}`);
