// ** Day 4 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Reverse String ! }

// T A S K !!!
// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// * first attempt: naive solution; brute force
const reverseString1 = s => {
  // use reverse and chain join and split() to return expected result
  const rev = s.reverse().join('').split('');
  return rev;
}

// * second attempt: no extra space for another array / two pointer approach
// first at index 0, then length-1;
// while left < right
// time complexity:
// * O(n) 
// space complexity:
// * O(1)
const reverseString = s => {
  // create pointer variables, left and right
  let left = 0;
  let right = s.length-1;

  // iterate while left is smaller than right
  while(left < right) {
    // temp variable to hold on to value before reassignment
    let temp = s[left]
    s[left] = s[right];
    s[right] = temp;

    // add 1 to left and -1 to right to keep getting closer to the middle
    //console.log(s);
    left = left + 1;
    right = right - 1;
  }

  return s;
}

// * test cases!!
console.log(reverseString(["h","e","l","l","o"])); // -> ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // -> ["h","a","n","n","a","H"]