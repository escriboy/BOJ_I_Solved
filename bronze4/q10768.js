const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map(Number);

const month = input[0];
const day = input[1];

if (month > 2) {
  console.log('After');
} else if (month < 2) {
  console.log('Before');
} else if (month === 2) {
  if (day > 18) {
    console.log('After');
  } else if (day === 18) {
    console.log('Special');
  } else {
    console.log('Before');
  }
} else {
  console.log('Before');
}
