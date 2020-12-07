const init = require('../util/init');

function countTrees(lines, r, d) {
  const width = lines[0].length;
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < lines.length) {
    j %= width;
    const pos = lines[i][j];
    if (pos === '#') {
      count++;
    }
    j += r;
    i += d;
  }
  return count;
}

init().then((lines) => {
  const product = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
    .map((slope) => countTrees(lines, ...slope))
    .reduce((p, trees) => (p || 1) * trees, 0);
  console.log(product);
});