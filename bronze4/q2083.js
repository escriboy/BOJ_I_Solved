const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

/**
 * 1) 각 input값을 split(' ')으로 나누는 for문 작성
 * 2) input[0]의 2, 3번째 값에 대한 if문 작성 (나이 > 17, 몸무게 > 80) => Senior, or Junior
 * 3) 이름은 그대로 출력하고, 나이와 몸무게를 junior/senior로 대체하여 출력
 */

for (let i = 0; i < input.length - 1; i++) {
  const player = input[i].split(' ');
  const age = Number(player[1]);
  const weight = Number(player[2]);
  let agePart;
  if (age > 17 || weight >= 80) {
    agePart = 'Senior';
  } else {
    agePart = 'Junior';
  }

  console.log(`${player[0]} ${agePart}`);
}
