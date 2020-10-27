// ** Days of Code Challenge Part X  
// ** --> { Buddy Strings !!! }

// T A S K !
// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// * first attempt:
const buddyStrings = (A, B) => {
  if (A == "" || B == "" || A.length !== B.length) return false;
  if (A == B) {
      let set = new Set(A);
      return set.size !== A.length;
  }
  let a = "", b = "";
  for (i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
          a += A[i];
          b += B[i];
      } 
  }
  if (a.length == 2 && a.length == b.length) {
      return a[0] == b[1] && a[1] == b[0];    
  } 
  return false; 
};

// * test cases!
console.log(buddyStrings( A = "ab", B = "ba")); // -> true
console.log(buddyStrings(A = "ab", B = "ab")); // -> false
console.log(buddyStrings(A = "aa", B = "aa")); // -> true