// * Day 26 of 30 Days of Code ~ --> Longest Common Subsequence

// TASK !!! 

// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// * HINTS !!
// Try dynamic programming. DP[i][j] represents the longest common subsequence of text1[0 ... i] & text2[0 ... j].
// DP[i][j] = DP[i - 1][j - 1] + 1 , if text1[i] == text2[j] DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]) , otherwise

// * first pass:
// try dynamic programming approach:

const longestCommonSubsequence1 = (text1, text2) => {

  // create two variables and initialize both to the lengths of each text respectively
  const txt1 = text1.length;
  const txt2 = text2.length;

  let dp = new Array(txt2 + 1).fill(0);

  for(let i = 1; i <= txt1; i += 1) {
    const next =  new Array(txt2 + 1).fill(0);

    for(let k = 1; k <= txt2; k += 1) {
      next[k] = dpHelper(dp, next, text1, text2, i, k);
    }
    dp = next;
  }

  return dp[txt2];

};

const dpHelper = (dp, next, text1, text2, i, k) => {
  if(text1[i - 1] === text2[k - 1]) {
    return dp[k - 1] + 1;
  }
  return Math.max(dp[k], next[k - 1], dp[k - 1]);
}

// * second attempt:
const longestCommonSubsequence = (text1, text2) => {
  // quick edge case check
  if(text1 === null || text2 === null || text1.length === 0 || text2.length === 0) {
    return 0;
  }

  // create length variables for clarity when accessing values
  const txt1 = text1.length;
  const txt2 = text2.length; 

  // create dp  matrix to store values 
  const dp = [...Array(txt1 + 1)].map(e => Array(txt2 + 1).fill(0));

  // loop through txt 2 values
  for(let i = 1; i <= txt1; i += 1) {
    for(let k = 1; k <= txt2; k += 1) {
      dp[i][k] = Math.max(
        dp[i - 1][k - 1] + Number(txt1[i - 1] === txt2[k - 1]),
        dp[i][k - 1], dp[i - 1][k]
      );
    }
  }
  return dp[txt1][txt2];
}



// * test cases!!
console.log(longestCommonSubsequence("abcde","ace")); // --> 3 "ace"
console.log(longestCommonSubsequence("abc","abc")); // --> 3 "abc"
console.log(longestCommonSubsequence("abc","def")); // --> 0 no common sequence
