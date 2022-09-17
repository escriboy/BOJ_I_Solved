// input[0]과 input[1]~[n] 사이를 가른다.
// input[1]부터는 3 ABC처럼, 띄어쓰기로 나눈다. input[1], input[2], ...
const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const testCount = +input[0]; // 2

// 원하는 값을 출력하는 for문을 생성한다.
for (let i = 1; i <= testCount; i++) {
  let result = '';
  // 1, 2
  for (let j = 0; j < input[i].split(' ')[1].length; j++) {
    // input[2].split(' ')[1] = 들어오는 문자열 = ABC 의 길이 = 3
    for (let k = 0; k < Number(input[i].split(' ')[0]); k++) {
      // input[1]의 [0] = 3만큼 반복해서 input[1].split(' ')[1].split('')[j];
      result += input[i].split(' ')[1].split('')[j]; // j = 0 => j를 세 번
    }
  }
  console.log(result);
}
