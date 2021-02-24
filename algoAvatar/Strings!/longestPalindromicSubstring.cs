using System;
using System.Collections;

// ** AE: Strings Daily Reps Challenge ~ C# Edition!
// ** --> { longestPalindromicSubstring !!! }

// T A SK !!!

// Write a function that, given a string, returns its longest palindromic substring.

// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

// You can assume that there will only be one longest palindromic substring. 

// * --- Roadmap --- *
// input: string
// ouptut: string
// constraints: optimize
// edge cases: empty string, ignore spaces, more than two of the same character, even/odd chars

// * main squeeze: first attempt using double for loop
// if even: there must be two of every character
// if odd: there must be only one character
// use hash table to store letters
// if we see the same letter, delete
// check hash at the end: odd - 1 key left, even - no keys left
// skip spaces

// * time complexity: O(N^3)
// * space complexity: O(N)
public class Program {
  public static string LongestPalindromicSubstring(string str) {
    // create a variable to store result to return out 
    string longest = "";
    for(int i = 0; i < str.Length; i += 1) {
      for(int k = i; k < str.Length; k += 1) {
        // build out substring
        string subString = str.Substring(i, k + 1 - i);
        // check length agains current longest and use helper if it is a palindrome, update accordingly
        if(subString.Length > longest.Length && isPalindrome(subString)) {
        longest = subString;
        }
      }
    }
    return longest;
  }

  // helper function to check if each character is equal to its left/right counterpart
  public static bool isPalindrome(string str) {
    // initialize pointers
    int leftIndex = 0;
    int rightIndex = str.Length - 1; 
    // check while pointers are not overlapping or out of bounds
    while(leftIndex < rightIndex) {
      if(str[leftIndex] != str[rightIndex]) {
        return false;
      }
      // update pointers
      leftIndex += 1;
      rightIndex -= 1;
    }
    return true;
  }

}

// * time complexity: O(N^2)
// * space complexity: O(N)
public class Program {
  public static string LongestPalindromicSubstring2(string str) {
    int[] currentLongest = { 0, 1 };
    for(int i = 1; i < str.Length; i += 1) {
      int[] odd = getLongestPalindromeFrom(str, i - 1, i + 1);
      int[] even = getLongestPalindromeFrom(str, i - 1, i);
      int[] longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
      currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
    }
    return str.Substring(currentLongest[0], currentLongest[1] - currentLongest[0]);
  }

  // add helper function logic:
}