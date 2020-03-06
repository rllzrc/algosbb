const needleInHaystack = (string, substring) => {
  for (let i = 0; i + substring.length <= string.length; i += 1) {
    console.log(string.slice(i, i + substring.length))
    if (substring === string.slice(i, i + substring.length)) return true;
  }
  return false;
};
​
const needleInHaystackWithWildcards = (string, substring) => {
  // if substring is in string, then the length of substring should be part of the length value for string
  // so i represents all the total chars that don't include the substring (should it exist in str)
  for (let i = 0; i + substring.length <= string.length; i += 1)  {
    for (let j = 0; j < substring.length; j += 1) { 
      // if string's "substring" char !== substring char at the index, break
      if (!(string[i + j] === substring[j] || substring[j] === '_' || '_' === string[i + j])) break; 
      // the only time to return true is when the inner loop has fully iterated without breaking!
      if (j === substring.length - 1) return true; 
    } 
  } 
  return false;
};




