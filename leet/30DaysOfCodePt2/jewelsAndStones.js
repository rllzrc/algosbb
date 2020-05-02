// ** Day 2 of 30 Days of Code Challenge Part ii -- May Edition! Jewels and Stones

// TASK !!!

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// * Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// * first attempt: 

// runtime complexity:
// * O(n) --> linear, check current character once in loop

const numJewelsInStones = (J, S) => {
  // initiate a counter variable
  let counter = 0;

  // loop through stones string
  for(let i = 0; i < S.length; i += 1) {
    if(J.indexOf(S.charAt(i)) > - 1) {
      counter += 1;
    }
  }
  return counter;
}


// * test cases!
console.log(numJewelInStones(J = "aA", S = "aAAbbbb")); // --> 3
console.log(numJewelInStones(J = "z", S = "ZZ")); // --> 0