const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const X = +input[0]; // 4

let cups = [1, 2, 3];
let arr = [];

for (let i = 1; i <= X; i++) {
  arr = input[i].split(' ').map(Number);
  let a = cups.indexOf(arr[0]);
  let b = cups.indexOf(arr[1]);
  let temp = cups[a];
  cups[a] = cups[b];
  cups[b] = temp;
}
console.log(cups[0]);
