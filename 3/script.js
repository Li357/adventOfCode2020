const init = require('../util/init');

init().then((lines) => {
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
    j += 3;
    i += 1;
  }
  console.log(count);
});