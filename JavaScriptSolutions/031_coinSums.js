// Possibilities to make 'n' pounds using British coins

const coinSums = (n) => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= n; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[n];
};


