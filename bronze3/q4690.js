for (let a = 2; a <= 100; a++) {
  for (let b = 2; b <= a; b++) {
    for (let c = 2; c <= a; c++) {
      for (let d = 2; d <= a; d++) {
        const A = Math.pow(a, 3);
        const B = Math.pow(b, 3);
        const C = Math.pow(c, 3);
        const D = Math.pow(d, 3);

        if (A === B + C + D && B <= C && C <= D)
          console.log(`Cube = ${a}, Triple = (${b},${c},${d})`);
      }
    }
  }
}
