// ** Day 16 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Best Time to Buy and Sell Stock III !!! }

// T A SK !!!

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// * first attempt:
const maxProfit = prices => {
  if(prices.length == 0) return 0
  let dp = new Array(prices.length).fill(0);
  for(let i = 1; i <= 2; i += 1){ 
      let min = prices[0];
      let max = 0;
      for(let k = 1; k < prices.length; k += 1){
          min = Math.min(min, prices[k] - dp[k]);
          max = Math.max(max, prices[k] - min);
          dp[k] = max;
      }
  }
  return dp.pop();
};

// * test cases!!
console.log(maxProfit([3,3,5,0,0,3,1,4])); // -> 6
console.log(maxProfit([1,2,3,4,5])); // -> 4
console.log(maxProfit([7,6,4,3,1])); // -> 0