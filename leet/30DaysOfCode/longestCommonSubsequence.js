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

// * second attempt: use hash table DS
const longestCommonSubsequence = (text1, text2) => {
  // merge two strings togehter
  const string = text1.concat(text2);
  console.log(string)
  // initiate a cache / hash table to store character frequency list
  const cache = {};
  // create longest variable to keep track of return result later
  let longest = [0, 1];
  // create a variable to keep track of current/start index
  let startIndex = 0;

  // iterate through the string
  for(let i = 0; i < string.length; i += 1) {
    // create a variable to keep track of current element and for clarity later
    const char = string[i];
    if(char in cache) {
      // reassign startindex value
      startIndex = Math.max(startIndex, cache[char] + 1);
    }

    // compute the difference, i + 1 to increase current position to the next
    // if it is smaller, then we update longest value
    if(longest[1] - longest[0] < i + 1 - startIndex) {
      longest = [startIndex, i + 1];
    }

    // update cache table
    // * PRO TIP!!
    // this will take care of both cases:
    // either we've already seen it or haven't, no matter what it adds or overwrites it in our hash table
    cache[char] = i;
  }

  return string.slice(longest[0], longest[1]);
}

// * test cases!!
console.log(longestCommonSubsequence("abcde","ace")); // --> 3 "ace"
//console.log(longestCommonSubsequence("abc","abc")); // --> 3 "abc"
//console.log(longestCommonSubsequence("abc","def")); // --> 0 no common sequence


const createMemoryMatrix = (a, b) =>
  Array(b.length + 1)
    .fill(Array(a.length + 1).fill(0))
    .map((x) => [...x]);

var longestCommonSubsequence = function (a, b) {
  const matrix = createMemoryMatrix(a, b);
  for (let x = 1; x <= a.length; x++) {
    for (let y = 1; y <= b.length; y++) {
      if (a[x - 1] === b[y - 1]) {
        matrix[y][x] = 1 + matrix[y - 1][x - 1];
      } else {
        matrix[y][x] = Math.max(matrix[y][x - 1], matrix[y - 1][x]);
      }
    }
  }
  return matrix[b.length][a.length];
};


var longestCommonSubsequence = function(text1, text2) {
   
  let dp = new Array(text1.length+1).fill(0).map(()=>new Array(text2.length+1).fill(0));
   for (let i=1;i<dp.length;i++) {
       for (let j=1;j<dp[0].length;j++) {    
           if (text1[i-1] == text2[j-1]) {
               dp[i][j] = dp[i-1][j-1] + 1;
           } else {
               dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
           }
       }
   }
       
   return dp[dp.length-1][dp[0].length-1];
   
};
