const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(x => +x);

let chipperBugger = input[0];

for (let i = 1; i < 3; i++) {
  if (chipperBugger > input[i]) {
    chipperBugger = input[i];
  }
}

let chipperSoda = input[3] <= input[4] ? input[3] : input[4];

console.log(chipperBugger + chipperSoda - 50);
