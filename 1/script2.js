const init = require('../util/init');

init().then((lines) => {
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines.length; j++) {
      for (let k = 0; k < lines.length; k++) {
        if (i !== j && j !== k && k !== i) {
          const x = Number(lines[i]);
          const y = Number(lines[j]);
          const z = Number(lines[k]);

          if (x + y + z === 2020) {
            console.log(x * y * z);
            return;
          }
        }
      }
    }
  }
});
