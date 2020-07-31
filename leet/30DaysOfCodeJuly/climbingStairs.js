// ** Day 31 of 30 Days of Code Challenge Part iii -- July Edition! 
// ** --> { Climbing Stairs !! }

// T A S K !!

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// * first attempt: dynamic programming
// top down or bottom up solution
// bottom up: think about the base case
// build on top of that
// remember sub problems that were previously solved
const climbStairs = n => {
  let dp = new Array.fill(n + 1);
  // solve the smaller bits
  dp[0] = 1;
  dp[1] = 1;
  // iterate through 
  for(let i = 2; i <= n; i += 1) {
    // reassign dp[i] -- where could you have come from
    // these were previously solved as sub probs
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// * test cases!!
console.log(climbStairs(2)); // -> 2
console.log(climbStairs(3)); // -> 3
