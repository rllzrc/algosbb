// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { H-Index II ! }

// T A S K !!

// Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

// According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

// N O T E:
// If there are several possible values for h, the maximum one is taken as the h-index.

// Follow up:
// This is a follow up problem to H-Index, where citations is now guaranteed to be sorted in ascending order.
// Could you solve it in logarithmic time complexity?

// * first attempt: linear solution
// time complexity:
// * O(n) -> linear
const hIndex = citations => {
  // create a variable to hold on to the length of citations
  // index variable to keep track of the end
  const length = citations.length;
  let i = length-1;

  // iterate while index is greater than or equal to 0
  while(i >= 0) {
    // if this condition is met, we have a valid scenario so break out of the loop -> starting from the right side of the array
    if(citations[i] < length-i) break;
    // otherwise, keep decrementing i
    i -= 1;
  }
  // if it doesn't break, we will reach the end (or left most side) of the array
  return length - i - 1;
}

// * test case!!
console.log(hIndex(citations = [0,1,3,5,6])); // -> 3 [0,1,3,5,6] means the researcher has 5 papers in total and each of them had received 0, 1, 3, 5, 6 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, her h-index is 3.


