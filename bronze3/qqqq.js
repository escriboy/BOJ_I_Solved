const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let diagonal = 0;

const matchesAndBox = function (input) {
  const arr = input.split(' ').map(Number);
  diagonal = Math.sqrt(Math.pow(arr[1], 2) + Math.pow(arr[2], 2));
};

matchesAndBox(input[0]);
const newInput = input.slice(1).map(Number);
for (const i of newInput) {
  i <= diagonal ? console.log('DA') : console.log('NE');
}

/*
  박스의 밑면에 성냥이 다 닿아야 한다.
  3 x 4의 박스라면 => 대각선의 길이를 구하고 그것보다 작으면 성냥을 들일 수 있다.
  제곱: Math.pow(?, 2);
  루트값: Math.sqrt
  Math.rooot?(a*a + b*b)
  */
