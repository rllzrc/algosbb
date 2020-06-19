// ** Day 19 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Longest Duplicate Substring! }

// T A S K 
// Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  (The occurrences may overlap.)

// Return any duplicated substring that has the longest possible length.  (If S does not have a duplicated substring, the answer is "".)

// H I N T S ~
// Binary search for the length of the answer. (If there's an answer of length 10, then there are answers of length 9, 8, 7, ...)

// To check whether an answer of length K exists, we can use Rabin-Karp 's algorithm.

// * Rabin-Karp string pattern recognition 
// uses hashcode to add values to "the pattern" to match against given string
// rolling hash function to check current value and make sure the strings are matching
// subtract raise sq values, multiply and then add during rolling phase (with updated mechanism of using powers)
// drawback possibility of collision - "spurious hits" O(mn) worst case -> create a strong hash function to prevent this
// use 26 (number of letters in the alphabet) as a base to the power depending on the pattern's length
// subtract and add as you continue down the lenght of string
// O(n - m + 1) -> average case 
// avoid overflow by using % depending on data type (variable) 
// use the hash code to avoid checking every pattern in the string
// * first attempt:
const longestDuplicateSubstring = S => {

}

// * test cases!
console.log(longestDuplicateSubstring("banana")); // ->  "ana"
console.log(longestDuplicateSubstring("abcd")); // ->  ""