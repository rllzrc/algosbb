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
const maxProfit1 = prices => {
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

// * second attempt: using DP
// 3 different states: hold, sold, rest
// hold: bought stock, or had stock and did nothing to it
// sold: sold stock that day
// rest: cool down period

// various states:
// hold or rest => HOLD today
// hold => SOLD today
// sold or rest => REST today 
// use an array to keep track of each day's state, use integers to keep track of yesterday and today 

// time complexiy:
// * Linear -- O(N)
// space complexity:
// * Constant -- O(1)
const maxProfit = prices => {
  // create variables to keep track of current states
  let hold = -Infinity;
  let sold = 0;
  let rest = 0;
  // iterate through prices arr
  for(let i = 0; i < prices.length; i += 1) {
    // create variables to keep track of yesterday and todays events
    let nxtHold = Math.max(hold, rest - prices[i]);
    let nxtSold = hold + prices[i];
    let nxtRest = Math.max(rest, sold);
    // reassign values
    hold = nxtHold;
    sold = nxtSold;
    rest = nxtRest;
  }
  return Math.max(sold, rest);
}

// * test cases!!
console.log(maxProfit([1,2,3,0,2])); // -> 3
