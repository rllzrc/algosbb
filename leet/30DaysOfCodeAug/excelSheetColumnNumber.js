// ** Day 10 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Excel Sheet Column Number ! }

// T A S K !!
// Given a column title as appear in an Excel sheet, return its corresponding column number.

// * first attempt:
const titleToNumber = s => {
  let res = 0;
    
  for (let i = 0; i < s.length; i++) {
      const ascii = s.charCodeAt(i) - 64;
      res = (res * 26) + ascii;
  }
  
  return res;
};