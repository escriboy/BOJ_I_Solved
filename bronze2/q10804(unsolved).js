// const input = require('fs')
//   .readFileSync('dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let shift = [4, 9];

let tmp = arr[shift[1]];
arr[shift[1]] = arr[shift[0]];
arr[shift[0]] = tmp;

tmp = arr[shift[1] - 1];
arr[shift[1] - 1] = arr[shift[0] + 1];
arr[shift[0] + 1] = tmp;

tmp = arr[shift[1] - 2];
arr[shift[1] - 2] = arr[shift[0] + 2];
arr[shift[0] + 2] = tmp;

console.log(arr);

/**
 * 1234 10 6789 5
 * 1234 10 9 78 6 5
 *
 */
