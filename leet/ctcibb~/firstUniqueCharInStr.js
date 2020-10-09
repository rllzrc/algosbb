// ** Days of Code Challenge Part X -- August Edition! 
// ** --> { First Unique Character In A String !!! }

// T A S K !!
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// * first attempt:
const firstUniqChar = s => {
  // edge case check
  if(!s || s.length === 0) return 0; 
  // create a cache/hash set frequency counter
  const cache = {};
  // create a cache/hash set to store character freq values
  for(let i = 0; i < s.length; i += 1) {
    // map out key/val pairs
    if(!cache[s[i]]) {
      cache[s[i]] = 1;
    } else {
      cache[s[i]] += 1;
    }
  }

  for(let i = 0; i < s.length; i += 1) {
    
    for(let key in cache) {
      if(cache[key] === 1) {
        return i; 
      } else if(cache[key] >)
      }
    }
  } 

}

// * test cases
console.log(firstUniqChar('leetcode')); // -> 0
console.log(firstUniqChar('loveleetcode')); // -> 2