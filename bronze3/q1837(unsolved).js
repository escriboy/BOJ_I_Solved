const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const pw = input[0];
const isGood = input[1];
const arr = [];

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num;
};

for (let i = 2; i <= pw; i++) {
  if (isPrime(i)) {
    arr.push(isPrime(i));
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i * j === pw && i <= j) {
      if (i < isGood) {
        console.log(`BAD ${i}`);
      } else {
        console.log('GOOD');
      }
    }
  }
}

/*

143 => x * y = 143이라는 말이므로 143보다 작은 두 소수의 곱이 143이라는 말
1) 143보다 작은 모든 소수를 구한다.
2) 곱해서 pw값이 나오는 수를 구한다.
3) 



*/
