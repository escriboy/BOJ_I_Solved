const input = require('fs').readFileSync('dev/stdin').toString().trim();

const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

const solution = function (str) {
  for (const c of croatian) str = str.replaceAll(c, 'c');
  return str.length;
};

console.log(solution(input));
