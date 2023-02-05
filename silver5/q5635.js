const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = input.shift();

const birthArr = [];
const name = [];
const date = [];

for (const string of input) {
  birthArr.push(string.split(' ').reverse());
}

for (let i = 0; i < N; i++) {
  birthArr[i][0] = Number(birthArr[i][0]);
  if (birthArr[i][1].length === 1) birthArr[i][1] = '0' + birthArr[i][1];
  if (birthArr[i][2].length === 1) birthArr[i][2] = '0' + birthArr[i][2];
}

for (let i = 0; i < N; i++) {
  name.push(birthArr[i][3]);
  date.push(Number(birthArr[i].splice(0, 3).join('')));
}

console.log(name[date.indexOf(Math.max(...date))]);
console.log(name[date.indexOf(Math.min(...date))]);
