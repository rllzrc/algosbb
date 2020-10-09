// ** Days of Code Challenge Part X -- August Edition! 
// ** --> { First Unique Character In A String !!! }

// T A S K !!
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// * first attempt:
const firstUniqChar = s => {
  // edge case check
  if(!s || s.length === 0) return 0; 
  // create a cache/hash set frequency counter using Map
  const map = new Map(); 
  // add key value/pairs
  for(let char of s) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }

  console.log(map);

  // find the index
  for(let i = 0; i < s.length; i += 1) {
    if(map.get(s[i]) === 1) return i;
  }
  
  return -1;
}

// * test cases
console.log(firstUniqChar('leetcode')); // -> 0
console.log(firstUniqChar('loveleetcode')); // -> 2