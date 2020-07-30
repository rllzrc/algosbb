// ** Day 4 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Word Break II ! }

// T A S K !!
// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

// Note:

//     The same word in the dictionary may be reused multiple times in the segmentation.
//     You may assume the dictionary does not contain duplicate words.

// * first attempt:
var wordBreak = function(s, wordDict) {
  let set = new Set(wordDict);
  let memo = {};
  return wordHelper(s, set);
  
  function wordHelper(substr, set) {
      if (substr in memo) return memo[substr];
      let res = [];
      if (set.has(substr)) {
          res.push(substr);
      }
      if ([0,1].includes(substr.length)) return res;
      for (let i = 1;  i < substr.length; i++) {
          let first = substr.substring(0, i);
          if (set.has(first)) {
              let combos = wordHelper(substr.substring(i), set);
              for (let combo of combos) {
                  res.push(`${first} ${combo}`);
              }
          }
      }
      memo[substr] = res;
      return res;
  }
};

// * test cases!!
console.log(wordBreak(s = "catsanddog",
wordDict = ["cat", "cats", "and", "sand", "dog"])); // -> [
//   "cats and dog",
//   "cat sand dog"
// ]

