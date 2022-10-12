const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const AB = input[0].split(' ').map(Number);
const CD = input[1].split(' ').map(Number);

const A = AB[0] / CD[0] + AB[1] / CD[1];
const B = CD[0] / CD[1] + AB[0] / AB[1];
const C = CD[1] / AB[1] + CD[0] / AB[0];
const D = AB[1] / AB[0] + CD[1] / CD[0];

const result = [A, B, C, D];

result.sort((a, b) => b - a);

switch (result[0]) {
  case A:
    console.log(0);
    break;
  case B:
    console.log(1);
    break;
  case C:
    console.log(2);
    break;
  case D:
    console.log(3);
    break;
  default:
    break;
}

/*

경우의 수: 
1) A/C + B/D
2) C/D + A/B
3) D/B + C/A
4) B/A + D/C

최댓값을 구하는 동시에 순서를 기억해야 함
*/
