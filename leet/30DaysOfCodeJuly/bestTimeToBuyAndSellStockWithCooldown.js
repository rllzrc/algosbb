// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Best Time To Buy And Sell Stock With Cooldown ! }

// T A S K !!
// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

//     You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
//     After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

// compare current price + next ith's price
// if next is greater than, then we want to make that transaction
// * first attempt:
const maxProfit = prices => {
  // quick edge case check
  if(!prices || prices.length === 0) return 0;
  // create a variable to keep track of profit
  let profit = 0;
  // create a variable to store hold
  let held = - Infinity;
  let reset = 0;
  // loop through prices 
  for(let i = 0; i < prices.length - 1; i += 1) {
    // create a variable to keep track of pre
    let pre = profit;
    // check if next is greater than current
    if(prices[i + 1] > prices[i]) {
      // calculate difference and store into profit
      profit += prices[i + 1] - prices[i]
    }
    held = Math.max(held, reset - prices[i]);
    reset = Math.max(reset, pre);
  }
  return Math.max(profit, reset);
}

// * test cases!!
console.log(maxProfit([1,2,3,0,2])); // -> 3
