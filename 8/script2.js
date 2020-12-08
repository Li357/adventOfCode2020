const init = require('../util/init');

function getTerminatingAcc(instructions) {
  const seen = {};
  let acc = 0;
  let i = 0;

  while (i < instructions.length) {
    if (seen[i]) {
      return -1;
    }

    const [cmd, rawArg] = instructions[i].split(' ');
    const arg = Number(rawArg);
    seen[i] = true;

    switch (cmd) {
      case 'nop':
        i++;
        break;
      case 'acc':
        acc += arg;
        i++;
        break;
      case 'jmp':
        i += arg;
      default:
    }
  }
  return acc;
}

init().then((instructions) => {
  for (let i = 0; i < instructions.length; i++) {
    const [cmd, rawArg] = instructions[i].split(' ');
    if (cmd === 'jmp') {
      const changed = [...instructions.slice(0, i), `nop ${rawArg}`, ...instructions.slice(i + 1)];
      const acc = getTerminatingAcc(changed);
      if (acc > -1) {
        console.log(acc);
        break;
      }
    }
  }
});
