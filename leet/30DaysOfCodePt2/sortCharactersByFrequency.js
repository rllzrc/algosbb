// ** Day 20 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Sort Characters By Frequency! }

// Given a string, sort it in decreasing order based on the frequency of characters.

// * first attempt: use a cache object/hash map type of DS
const frequencySort1 = s => {
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

// * second attempt:
var frequencySort3 = function(s) {
  const frequency = {}
  const result = []
  for (let i = 0; i < s.length; i++) {
      frequency[s[i]] = (frequency[s[i]] || 0) + 1;
  }
  const chars = Object.keys(frequency).sort(makeSort(frequency))

  for (let i = 0; i < chars.length; i++) {
      const count = frequency[chars[i]]
      for (let j = 0; j < count; j++) {
          result.push(chars[i])
      }
  }
  return result.join('')
};

const frequencySort = s => {
  // create a cache to store values in
  const cache = {};
  // create a results array to return out later
  const resultArr = [];

  // iterate through s input and map out characters into cache
  for(let i = 0; i < s.length; i += 1) {
    cache[s[i]] = (cache[s[i]] || 0) + 1;
  }

  //console.log(cache)
  
}
// * test cases!!!~
console.log(frequencySort("tree")); // -> "eert" or "eetr"
console.log(frequencySort("cccaaa")); // -> "cccaaa" or "aaaccc"
console.log(frequencySort("Aabb")); // -> "bbAa"


// find the largest value in obj
// const values = Object.keys(cache).reduce((a, b) => cache[a] > cache[b] ? a : b);

// const sorted = Object.entries(cache).sort((a, b) => b[1] - a[1]);