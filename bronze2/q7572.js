const input = require('fs').readFileSync('dev/stdin').toString().trim();
// const input = '2013';
const year = +input;
const animals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const gan = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = animals[(year + 8) % 12] + gan[(year + 6) % 10]; // F , 9

console.log(result);
