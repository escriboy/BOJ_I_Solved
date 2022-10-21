const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const dogsTime = input[0].split(' ').map(Number); // [2, 2, 3, 3]

const dogAAttack = dogsTime[0];
const dogARest = dogsTime[1];
const dogBAttack = dogsTime[2];
const dogBRest = dogsTime[3];

const dogATot = dogAAttack + dogARest;
const dogBTot = dogBAttack + dogBRest;

const mans = input[1].split(' ').map(Number); // [1, 3, 4]

for (let i = 0; i < mans.length; i++) {
  let sum = 0;
  if (mans[i] % dogATot !== 0 && mans[i] % dogATot <= dogAAttack) sum += 1;
  if (mans[i] % dogBTot !== 0 && mans[i] % dogBTot <= dogBAttack) sum += 1;

  console.log(sum);
}
