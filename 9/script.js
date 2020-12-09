const init = require('../util/init');

function search(nums, i) {
  for (let j = 1; j < 26; j++) {
    for (let k = 1; k < 26; k++) {
      if (j !== k && nums[i - j] !== nums[i - k] && nums[i - j] + nums[i - k] === nums[i]) {
        return true;
      }
    }
  }
  return false;
}

init().then((lines) => {
  const nums = lines.map(Number);

  for (let i = 25; i < nums.length; i++) {
    const curr = nums[i];
    if (!search(nums, i)) {
      console.log(curr);
      break;
    }
  }
});
