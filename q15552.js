let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let sum = '';

for (let i = 1; i <= input[0]; i++) {
  let newArr = input[i].split(' ');
  sum += parseInt(newArr[0]) + parseInt(newArr[1]) + '\n';
}

console.log(sum);

// let newArr = input[i].split(' ').map((item) => Number(item));
// sum += newArr[0] + newArr[1] + '\n';
