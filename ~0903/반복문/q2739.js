const fs = require('fs');

const inputData = fs.readFileSync('dev/stdin').toString();

const N = parseInt(inputData);

let i;

for (i = 1; i < 10; i++) [console.log(`${N} * ${i} = ${N * i}`)];
