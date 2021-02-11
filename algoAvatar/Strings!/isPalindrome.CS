// ** AE: Strings Daily Reps Challenge ~ C# Edition!
// ** --> { isPalindrome !!! }

// T A SK !!!

// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome. A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes. 

// * roadmap
// create a new string, iterate backwards
// check if new string === s to find out if a palindrome 

// * first attempt: brute force
// time complexity: O(n^2)
// space complexity: O(n)

public class Program {
  public static bool IsPalindrome(string str) {
    // declare variable to construct new reveresed string
    string reversed = "";
    for(int i = str.Length - 1; i >= 0; i -= 1) {
      // concatenate characters in reverse
      reversed += str[i]; 
    }
    // check for equality to reutrn boolean 
    return str.Equals(reversed);
  }
}

// * second attempt: use an array instead for time efficiency! 
// time complexity: O(n)
// space complexity: O(n)
public class Program {
  public static bool IsPalindrome2(string str) {
    StringBuilder reversedstring = new StringBuilder();
    for(int i = str.Length - 1; i >= 0; i -= 1) {
      reversedstring.Append(str[i]);
    }
    return str.Equals(reversedstring.ToString());
  }
}

// * roadmap: 
// new string = []
// iterate backwards, push character into []
// check if new === s.join() -> convert back to string to compare it


// * third attempt: explore recursion

// * roadmap: 
// is the first letter equal to the last letter? is the string in the middle a palindrome as well? 
// by applying this logic, we can use recursion => isPalindrome function - base case is middle of string returning true or false
// if the first letter = last letter && isPalindrome (call it on the middle character) => then return true

// * time complexity: O(N) -> half iteration through the string but still converges to linear time 
// * space complexity: due to recursion -> call stack stores state of function there (adds frame onto it) thus O(N/2) which converges to O(N)

// * with tail call recursion
// depends on compilers -> some may optimize others it may not save you much, but worth metnioning -> don't make the mistake of thinking the recursive algo will not use additonal space (spoiler alert: it typically will) 


// * fourth attempt: iteratively traverse without extra space usage aka pointers

// * roadmap: 
// pointers @ first and last characters
// compare the two, keep moving, if not return false
// to keep moving: move pointers accordingly up 1 down 1 -> when pointers overlap we are done

// * time complexity: O(N) -> half iteration through the string but still converges to linear time 
// * space complexity: no auxiliary data storage usage -> O(1)
