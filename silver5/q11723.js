// const S = `26
// add 1
// add 2
// check 1
// check 2
// check 3
// remove 2
// check 1
// check 2
// toggle 3
// check 1
// check 2
// check 3
// check 4
// all
// check 10
// check 20
// toggle 10
// remove 20
// check 10
// check 20
// empty
// check 1
// toggle 1
// check 1
// toggle 1
// check 1`;
// const input = S.split('\n');

const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.shift();
let arr = [];

for (const string of input) {
  const str = string.split(' ');
  const action = str[0];
  const num = str[1];

  switch (action) {
    case 'add':
      arr.includes(num) || arr.push(num);
      break;
    case 'remove':
      if (arr.includes(num)) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === num) arr.splice(i, 1);
        }
      }
      break;
    case 'check':
      arr.includes(num) ? console.log(1) : console.log(0);
      break;
    case 'toggle':
      if (arr.includes(num)) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === num) arr.splice(i, 1);
        }
      } else arr.push(num);
      break;
    case 'all':
      arr = [];
      for (let i = 1; i <= 20; i++) {
        arr.push(i);
      }
      break;
    case 'empty':
      arr = [];
      break;
  }
}

console.log(arr.join('\n'));

/**
 * add => S에 x를 추가 (x가 이미 있는 경우에는 연산을 무시)
 * remove => S에서 x 제거
 * check x => x가 있으면 1, 없으면 0
 *
 */
