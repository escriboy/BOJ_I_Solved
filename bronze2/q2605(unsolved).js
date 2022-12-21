const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

// const input = ['5', '0 1 1 3 2'];

const students = input[1].split(' ').map(Number).slice(1); // [1,1,3,2]

let line = [1];
let number = 2;

students[0] === 1 ? line.unshift(number) : line.push(number);
number++;

for (let i = 1; i < students.length; i++) {
  if (students[i] > 0) {
    line.splice(line.length - students[i], 0, number);
  } else {
    line.push(number);
  }
  number++;
}
console.log(line);

/**
 * 1 : 무조건 0을 뽑는다.
 * 2 : 1을 뽑으면 앞으로, 아니면 그대로 배열에 추가
 * 3 : 2를 뽑으면 맨 앞, 1을 뽑으면 한 칸 앞으로, 아니면 배열 맨 뒤에 추가
 * splice() => splice(1, 0, 'el') => 첫 칸에 추가
 *
 *
 *
 * splice(0,0,2); 1
 * splice(1,0,3); 1
 * splice(3,0,4); 3
 * splice(2,0,5); 2
 */
