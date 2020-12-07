const init = require('../util/init');

init().then((lines) => {
  for (let i = 0; i < lines.length; i++) {
    for (let j = i; j < lines.length; j++) {
      const x = Number(lines[i]);
      const y = Number(lines[j]);

      if (x + y === 2020) {
        console.log(x * y);
        break;
      }
    }
  }
});