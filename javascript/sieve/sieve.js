export const primes = (total) => {
  let nums = [...Array(total - 1).keys()].map((x) => 2 + x);
  for (let prime = 2; prime < Math.sqrt(total); prime++) {
    // Work our way up to the square root of total and mark any multiple of 'prime' as false
    for (let x = prime * 2; x < total + 2; x += prime) {
      // if a multiple of prime has already been marked as false, skip it
      if (nums[x - 2]) nums[x - 2] = false;
    }
  }
  return nums.filter((x) => x);
};
