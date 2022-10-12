const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < input.length; i++) {
  const PI = Math.PI;
  const N = input[i].split(' ').map(Number);
  if (N[1] !== 0) {
    const mile = (N[0] / 12 / 5280) * Math.PI;
    const roll = N[1];
    const second = N[2];
    const distance = mile * roll; // mile
    const avgSpeed = (distance / second) * 3600;
    console.log(
      `Trip #${i + 1}: ${distance.toFixed(2)} ${avgSpeed.toFixed(2)}`,
    );
  }
}
