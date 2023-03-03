const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = +input[0].split(' ')[0];
const pokemons = input.slice(1, n + 1);
const questions = input.slice(n + 1);

function solution(pokemons, questions) {
  const map = new Map(pokemons.map((pokemon, index) => [pokemon, index + 1]));
  questions.forEach((question) => {
    if (Number.isNaN(+question)) console.log(map.get(question));
    else console.log(pokemons[+question - 1]);
  });
}

solution(pokemons, questions);
