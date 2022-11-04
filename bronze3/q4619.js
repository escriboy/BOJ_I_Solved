const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

input.pop();

for (const arr of input) {
  const newArr = arr.split(' ').map(Number);
  const A = newArr[0];
  const N = newArr[1];

  let result = true;
  let i = 0;
  const sqrts = [];

  while (result) {
    const diff = newArr[0] - Math.pow(i, newArr[1]);
    sqrts.push(diff);
    if (diff < 0) result = false;

    i++;
  }
  const answer = sqrts.slice(-2);
  Math.abs(answer[0]) > Math.abs(answer[1])
    ? console.log(sqrts.indexOf(answer[1]))
    : console.log(sqrts.indexOf(answer[0]));
}

/*

1. for of 문을 사용해 값을 판별하고 출력
2. Math.pow()를 사용할지 sqrt()를 사용할지?
3. A와 B가 주어지고 N의 B제곱이 A와 제일 가까우면 된다.
4. for문을 돌면서 A에서 N의 B제곱을 뺐을 때의 절대값이 가장 작은 것을 선택하면 되지 않을까!
5. 문제는 언제까지 for문을 돌아야 하냐는 거다.
6. 0보다 작은 값과 0보다 큰 값이 하나씩 나올 듯? 만약에 계속 빼다가 0보다 작은 값이 나오면
7. 절대값이 더 작은 값을 출력하면 되지 않을까?


*/
