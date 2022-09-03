const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString().split(' ');

const year = parseInt(inputData);

console.log(year - 543);
