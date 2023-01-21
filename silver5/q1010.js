// const input = require('fs')
//   .readFileSync('dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

const input = ['3', '2 2', '1 5', '13 29'];

const sites = input.slice(1).map((site) => site.split(' ').map(Number));
console.log(sites);

/**
 * 다리르 지을 수 있는 경우의 수
 * 다리끼리는 서로 겹쳐질 수 없음 (일자로만)
 */
