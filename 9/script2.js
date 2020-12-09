const init = require('../util/init');

init().then((lines) => {
  const nums = lines.map(Number);
  const target = 29221323;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (sum + nums[j] === target) {
        const list = nums.slice(i, j + 1);
        console.log(Math.min(...list) + Math.max(...list));
        return;
      }
      if (sum + nums[j] > target) {
        break;
      }
      sum += nums[j];
    }
  }
});
