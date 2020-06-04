// ** Day 4 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Reverse String ! }

// T A S K !!!
// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// * first attempt: naive solution; brute force
const reverseString = s => {
  // use reverse and chain join and split() to return expected result
  const rev = s.reverse().join('').split('');
  return rev;
}

// * test cases!!
console.log(reverseString(["h","e","l","l","o"])); // -> ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // -> ["h","a","n","n","a","H"]