const input = require('fs').readFileSync('dev/stdin').toString().trim();

let pentagon = 5;
let number = +input;

for (let i = 1; i < number; i++) {
  pentagon = (pentagon + (i + 2) * 3 - 2) % 45678;
}

console.log(pentagon);
