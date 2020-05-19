// ** Day 18 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Online Stock Span ! }

// T A S K !!
// Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

// The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

// For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].

// * first attempt :
// use stack as a data structure! 
// push stock prices and span value (1) if no change 
// increase value of span by popping the top element 

var StockSpanner = function() {
  // declare a stack ds to store values in
  this.stack = [];

};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  // initialize a count variable to keep track of span
  let count = 1;
  // check with while loop
  // when the price of the previous day is less than or equal to price, then increase the value of span
  // span + the span value of the previous price
  while(this.stack.length > 0 && this.stack[this.stack.length-1][0] <= price) {
    count += this.stack.pop()[1];
  }
  // price is at index zero and span at index 1
  this.stack.push([price, count]);
  return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */