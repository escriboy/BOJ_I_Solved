const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .toLocaleUpperCase();

let answer = [];
let alphabet = [];
let count = 0;

// 알파벳으로 이루어진 배열 생성
for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i).toLocaleUpperCase());
}

for (let i = 0; i < input.length; i++) {
  if (input[i] !== alphabet[i]) continue;
  count++;
}

/*
1) answer 배열에 해당 알파벳이 몇 개 있는지를 각각 push한다.
- sum 
input.indexOf(A,B,C...)가 -1이 아니면 == 'A,B,C,...'가 input에 있으면 => 
answer 배열에 각 알파벳에 해당하는 배열에 1씩 더해진다.



2) 배열을 복사한 뒤에 sort() 메서드를 이용해 최대값을 찾는다.
3) 찾은 최대값이 어느 배열에 있는지 찾는다.
2) 배열에 해당하는 알파벳(대문자)을 출력한다.

*/

/*
1) 문자열을 toLower, toUpper 하기
2) 문자열에 a-z, A-z가 각각 몇 개씩 있는지 => 숫자를 배열에 저장
3) 최대값이 어딨는지 찾기
*/
