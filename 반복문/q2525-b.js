const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString().split('\n');

const a = parseInt(inputData[0].split(' ')[0]);
const b = parseInt(inputData[0].split(' ')[1]);
const c = parseInt(inputData[1]);

let hour = 0;
let minute = 0;

hour = Math.floor((a * 60 + b + c) / 60);
minute = (a * 60 + b + c) % 60;

if (hour >= 24) {
  hour -= 24;
}

console.log(`${hour} ${minute}`);
