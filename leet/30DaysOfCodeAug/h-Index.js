// ** Day 11 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { H-Index !!! }

// T A S K !!
// Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

// According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

// * first attempt:
const hIndex = citations => {
  citations.sort((a, b) => b - a);
  let h = 0;
  
  for (let i = 0; i < citations.length; i++) {
      if (citations[i] < i) return h;
      h = Math.min(citations[i], i + 1);
  }
  
  return h;
};