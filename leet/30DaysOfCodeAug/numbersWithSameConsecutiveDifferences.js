// ** Day 18 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Numbers With Same Consecutive Differences !!! }

// T A SK !!!

// Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.

// Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.

// You may return the answer in any order.

// * first attempt: use DP
const numsSameConsecDiff = (N, K) => {
  let prevSet = new Set([0,1,2,3,4,5,6,7,8,9]);
    
  for (let n = 2; n <= N; n++) { // we start at 2 since n = 1 is just the one digit numbers 0 through 9
      const newSet = new Set();
      
      for (const prevVal of prevSet) {
          const lastDig = prevVal % 10;
          
          const plusK = lastDig + K;
          const minusK = lastDig - K;
          
          if (prevVal > 0 && plusK < 10) newSet.add((prevVal * 10) + plusK);
          if (prevVal > 0 && minusK >= 0) newSet.add((prevVal * 10) + minusK);
      }
      
      prevSet = newSet;
  }

  return [...prevSet];
};

// * test cases!!
console.log(numsSameConsecDiff(3, 7)); // -> [1,2,3,1]
console.log(numsSameConsecDiff(2, 1)); // -> [5,2,3]