const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const AB = input[0].split(' ').map(Number);
const CD = input[1].split(' ').map(Number);

const res1 = AB[0] / CD[0] + AB[1] / CD[1];
const res2 = CD[0] / CD[1] + AB[0] / AB[1];
const res3 = CD[1] / AB[1] + CD[0] / AB[0];
const res4 = AB[1] / AB[0] + CD[1] / CD[0];

const result = [res1, res2, res3, res4];

result.sort((a, b) => b - a);

switch (result[0]) {
  case res1:
    console.log(0);
    break;
  case res2:
    console.log(1);
    break;
  case res3:
    console.log(2);
    break;
  case res4:
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
