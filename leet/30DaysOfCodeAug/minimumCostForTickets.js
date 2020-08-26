// ** Day 25 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Minimum Cost For Tickets !!! }

// T A SK !!!

// In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.

// Train tickets are sold in 3 different ways:

//     a 1-day pass is sold for costs[0] dollars;
//     a 7-day pass is sold for costs[1] dollars;
//     a 30-day pass is sold for costs[2] dollars.

// The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

// Return the minimum number of dollars you need to travel every day in the given list of days.

// * first attempt: recursion
const sumOfLeftLeaves = (root) => {
  const lastDay = days[days.length - 1];
  const set = new Set(days);
  
  const dp = new Array(lastDay + 1).fill(0);
  
  for (let i = 1; i <= lastDay; i++) {
      if (!set.has(i)) dp[i] = dp[i - 1];
      else dp[i] = Math.min(
          dp[i - 1] + costs[0],
          dp[Math.max(0, i - 7)] + costs[1], 
          dp[Math.max(0, i - 30)] + costs[2]
      );
  }
  
  return dp[lastDay];
};

// * test cases:
console.log(mincostTickets(days = [1,4,6,7,8,20], costs = [2,7,15])); // -> 11
console.log(mincostTickets(days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15])); // -> 17
  
