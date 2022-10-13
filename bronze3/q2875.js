const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const men = input[0];
const women = input[1];
const internship = input[2];
let team = [];

for (let i = internship; i >= 0; i--) {
  let mRemained = Math.floor((men - i) / 2);
  let wRemained = women - (internship - i);

  wRemained >= mRemained ? team.push(mRemained) : team.push(wRemained);
}
team.sort((a, b) => b - a);
console.log(team[0] === undefined ? 0 : team[0]);

/*

문제점: 

*/
