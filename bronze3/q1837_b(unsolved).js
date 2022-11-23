const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const pw = input[0];
const isGood = input[1];

const solution = n => {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
};

let isPrime = solution(pw);
let w = 0;
let min = 0;

const primeArr = isPrime.map((v, i) => (v ? i : 0)).filter(e => e);

console.log(primeArr);

for (let i = 2; i < primeArr.length; i++) {
  if (pw % primeArr[i] === 0) {
    w = pw / primeArr[i];
    min = w >= primeArr[i] ? primeArr[i] : w;
    break;
  }
}
if (min > isGood) {
  console.log('GOOD');
} else {
  console.log(`BAD ${min}`);
}

// for (let i = 0; i < primeArr.length; i++) {
//   for (let j = 0; j < primeArr.length; j++) {
//     if (i * j === pw && i <= j) {
//       if (i < isGood) {
//         console.log(`BAD ${i}`);
//       } else {
//         console.log('GOOD');
//       }
//     }
//   }
// }
