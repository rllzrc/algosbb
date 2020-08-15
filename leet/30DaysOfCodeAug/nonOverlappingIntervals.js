// ** Day 15 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Non-overlapping Intervals !!! }

// T A SK !!!

// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010. 

// * first attempt:
const eraseOverlapIntervals = intervals => {
  if (intervals.length == 0) return 0;
    
  let count = 0;
  
  intervals.sort((a, b) => a[1] - b[1]); // organize by end time ascending
  
  let end = intervals[0][1];
  
  for (let i = 1; i < intervals.length; i++) {
      const [start2, end2] = intervals[i];
      
      if (end <= start2) { // there is no overlap
          end = end2;
      } else { // there is an overlap
          count++;
          end = Math.min(end2, end);
      } 
  }


  return count;
};

// * test cases!!
console.log(longestPalindrome([[1,2],[2,3]])); // -> 0