// ** Day 12 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Pascal's Triangle !!! }

// T A S K !!
// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

// * first attempt:
const getRow = rowIndex => {
  if(!rowIndex) return [1];
    
  let res = [1, 1]
  
  while(--rowIndex) {
      const next = [];
      
      for(let i = 0; i < res.length-1; i++) {
          next.push(res[i] + res[i+1]);
      }
      res = [1, ...next, 1];
  }
  return res;
};