//  day 5 of challenge ~ 
// * Best Time to Buy and Sell Stock II

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// * brute force approach:

const maxProfit = prices => {
  
  let profit = 0;
  for(let i = 0; i < prices.length; i += 1) {
    if(prices[i+1] - prices[i] > 0) {
      profit += prices[i+1] - prices[i];
    }
  }
  return profit;
}

// * test cases!

console.log(maxProfit([7,1,5,3,6,4])); // --> 7
console.log(maxProfit([1,2,3,4,5])); // --> 4
console.log(maxProfit([7,6,4,3,1])); // --> 0