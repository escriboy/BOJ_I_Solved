// unsolved

let N = require('fs')
  .readFileSync('dev/stdin')
  .trim()
  .toString()
  .map((x) => Number(x));

let countA,
  countB = 0;

while (N !== 1) {
  if (N % 3 === 0) {
    N = N / 3;
    countA++;
  } else if (N % 2 === 0) {
    N = N / 2;
    countA++;
  } else if (N % 3 !== 0 && N % 2 !== 0) {
    N = N - 1;
    countA++;
  } else if (N === 1) {
    break;
  }
}

/**
 * 순서대로 식이 진행되는 것이 아니거나 식 순서의 모든 경우의 수를 생각한다.
 * 최단경로를 알려주는 그런 건 불가능하지 않을까 결국 모든 경우의 케이스를 적고 그 중에서...
 * a -> b -> c, a -> c -> b, b -> c -> a, c -> a -> b, c -> b -> a
 * 3으로 나누어져도 나누지 않을 때가 있다는 거지?
 * 그러면 n개의 while문을 만들어서 다 제어해야 하나? 그 중 count가 낮을 걸 고르게끔?
 *
 */
