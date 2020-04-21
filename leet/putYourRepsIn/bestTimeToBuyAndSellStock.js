// * Put Your Reps In! --> Best Time to Buy And Sell Stock II

// TASK !!!

// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// * first attempt:

const maxProfit = prices => {
  // declare a new variable to hold on to profit
  let profit = 0;
  // iterate through the array
  for(let i = 0; i < prices.lenght; i += 1) {
    // check if next element - current element is greater than 0
    if(prices[i + 1] - prices[i] > 0) {
      // reassign the value of profit to be that difference
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit;
}

// * test cases!! 
console.log(maxProfit([7,1,5,3,6,4])); // --> 7
console.log(maxProfit([1,2,3,4,5])); // --> 4
console.log(maxProfit([7,6,4,3,1])); // --> 0