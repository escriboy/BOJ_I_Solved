const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const n_arr = input.slice(0, N);
const m_arr = input.slice(N);

function binary_search(arr, name) {
  let high = arr.length - 1;
  let low = 0;
  let mid;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] > name) high = mid - 1;
    else if (arr[mid] < name) low = mid + 1;
    else return true;
  }
  return false;
}

const [long, short] =
  n_arr.length > m_arr.length ? [n_arr, m_arr] : [m_arr, n_arr];
long.sort();
const dbj = short.filter((name) => binary_search(long, name));
console.log(dbj.length + '\n' + dbj.sort().join('\n'));
