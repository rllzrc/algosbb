// ** Day 7 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Coin Change 2 }

// T A S K !!
// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

// * first attempt: using DP
const change1 = (amount, coins) => {
  // create a dp array with size of amount + 1
  const dp = new Array(amount + 1).fill(0);
  //fill in 1 for 0th index
  dp[0] = 1;

  // loop through arr of coins
  for(let i = 0; i < coins.length; i += 1) {
    for(let k = coins[i]; k <= amount; k += 1) {
      // add combos and add to previous version of combination
      const remainder = k - coins[i];
      dp[k] += dp[remainder];
      //console.log('dp:', dp);
    }
  }
  return dp[amount];
}

// * second attempt: using DP and forEach
const change = (amount, coins) => {
  // create a matrix grid with size of the amount + 1
  const dp = new Array(amount + 1).fill(0);
  // default amount fill in one for zero index
  dp[0] = 1;

  // loop through coins
  coins.forEach(coin => {
    for(let i = coin; i < dp.length; i += 1) {
      // reassign values
      console.log('index:', dp[i]);
      console.log('el:', coin);
      console.log('matrix:', dp);
      dp[i] = dp[i] + dp[i - coin];
    }
  });
  console.log('dp:', dp);
  return dp[dp.length - 1];
}
// * test cases !!
console.log(change(amount = 5, coins = [1, 2, 5])); // -> 4
//console.log(change(amount = 3, coins = [2])); // -> 0
//console.log(change(amount = 10, coins = [10])); // -> 1