// ** Day 10 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Find All Anagrams in a String ! }


// T A S K !!!
// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.


// * test cases!!
console.log(findAnagrams("cbaebabacd", "abc")); // -> [0,6]
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
console.log(findAnagrams("abab", "ab"
)); // -> [0,1,2]