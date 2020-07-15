// ** Day 15 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Reverse Words In A String ! }

// T A S K !!
// Given an input string, reverse the string word by word.

// Note:

//     A word is defined as a sequence of non-space characters.
//     Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
//     You need to reduce multiple spaces between two words to a single space in the reversed string.



// * first attempt:
// time complexity:
// * O(n)
const reverseWords = s => {
  // split string into arr
  let split = s.split(' ');
  // create a variable to hold on to result
  let reversedStr = '';

  // iterate over split arr
  for(let i = split.length - 1; i >= 0; i -= 1) {
    // check conditional, if current element is not an empty string
    if(split[i] !== '') {
      // and check if reversedStr length is greater than 0, meaning remove leading spaces
      if(reversedStr.length > 0) {
        reversedStr += ' ';
      }
    }
    reversedStr += split[i];
  }
  return reversedStr;
}

// * test cases!!
console.log(reverseWords("the sky is blue")); // -> "blue is sky the"
console.log(reverseWords("  hello world!  ")); // -> "world! hello"
console.log(reverseWords("a good   example")); // -> "example good a"
