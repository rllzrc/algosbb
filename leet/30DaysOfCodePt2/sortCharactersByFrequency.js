// ** Day 20 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Sort Characters By Frequency! }

// Given a string, sort it in decreasing order based on the frequency of characters.

// * first attempt: use a cache object/hash map type of DS
const frequencySort = s => {
  // initialize a cache object to keep track of number of frequencies 
  const cache = {};

  // create a variable to return out result
  let result = '';

  // iterate through s and map out values into cache
  for(let i = 0; i < s.length; i += 1) {
    if(!cache[s[i]]) {
      // add s as key and value of one if it doesn't exist yet
      cache[s[i]] = 1;
    } else {
      // increment value by 1
      cache[s[i]] += 1;
    }
  }
  console.log(cache);

  // iterate through cache and see which values have the largest amount -> this will give us the highest number of frequencies

  Object.keys(cache).sort((a, b) => cache[b] - cache[a]).forEach(e => {
    for(let i = 0; i < cache[e]; i += 1) {
      result += e;
    }
  });
  
  //console.log(sorted);

  return result;
}

// * test cases!!!~
console.log(frequencySort("tree")); // -> "eert" or "eetr"
console.log(frequencySort("cccaaa")); // -> "cccaaa" or "aaaccc"
console.log(frequencySort("Aabb")); // -> "bbAa"


// find the largest value in obj
// const values = Object.keys(cache).reduce((a, b) => cache[a] > cache[b] ? a : b);

// const sorted = Object.entries(cache).sort((a, b) => b[1] - a[1]);