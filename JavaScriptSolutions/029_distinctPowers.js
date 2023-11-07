const distinctPowers = (n) => {
  let isDistinct = new Set();
  let count = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      if (isDistinct.has(i ** j)) continue;
      isDistinct.add(i ** j);
      count++;
    }
  }
  return count;
};
