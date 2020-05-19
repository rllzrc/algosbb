// ** Day 17 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Find All Anagrams in a String ! }


// T A S K !!!
// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// roadmap:
// its a permutation basically ~ (rearrangement of the letters)
// take length of p to form a window since the anagram will be made up of letters in p
// compare window with p and if it matches, store the index in an array and increase window by 1 to the right
// make two dictionaries to store counter or frequency of characters
// if both are equal, add both starting indices

// * first attempt: use sliding window approach
const findAnagrams1 = (s, p) => {
  // create a new cache variable
  const pCache = {};

  // loop through p and map out its values
  for(let i = 0; i < p.length; i += 1) {
    if(pCache[p.charAt(i)]) {
      pCache[p.charAt(i)] += 1;
    } else {
      pCache[p.charAt(i)] = 1;
    }
  }

  // create a new result variable
  const result = [];
  // create a second cache dictionary to compare frequency values
  const pCacheCopy = {};

  // loop through s and map out values
  for(let i = 0; i < s.length; i += 1) {
    if(pCacheCopy[s.charAt(i)]) {
      pCacheCopy[s.charAt(i)] += 1;
    } else {
      pCacheCopy[s.charAt(i)] = 1;
    }

    // sliding window
    if(i >= p.length) {
      // create a varaible to hold on to current character
      let char = s.charAt(i-p.length);
      // check dictionaires
      if(pCacheCopy[char] === 1) delete pCacheCopy[char];
      else 
      pCacheCopy[char]--;
    }
    // invoke helper
    if(matches(pCache, pCacheCopy)) result.push(i-p.length + 1);
  }

  return result;
}

// helper function:
const matches = (map1, map2) => {
  // create key variables to hold on to property 
  let key1 = Object.keys(map1);
  let key2 = Object.keys(map2);

  // compare dictionary values
  if(key1.length !== key2.length) return false; 

  for(let i = 0; i < key1.length; i += 1) {
    if(map1[key1[i]] !== map2[key2[i]]) return false;
  }

  return true;
}

// * second attempt: still using sliding window approach ~
const findAnagrams = (s, p) => {
  // create a new variable to hold on to result
  const result = [];

  // quick edge case check:
  if(p.length > s.length) return result;

  // // create a hashmap to save the characters of the target substring
  // let cache = {};
  // // populate the cache object with character frequencies
  // for(let i = 0; i < p.length; i += 1) {
  //   if(!cache[p[i]]) {
  //     cache[p[i]] = 1;
  //   } else {
  //     cache[p[i]] += 1;
  //   }
  // }



   // create a new hash map variable
  let cache = new Map();
   //console.log(map)
   // populate the hash map object to save characters of the target substring
  for(let char of p) {
     // char = character 0 = frequency of the characters
     // its basiaclly adding the character as the key and a value of 1, if it already exists add 1 to its value
  cache.set(char, cache.getOrDefault(char, 0) + 1);
  }

  // create a start and end values to keep track of sliding window
  // create a counter variable to keep track of frequencies
  let start = 0;
  let end = 0;
  //let counter = Object.keys(cache).length;
  let counter = cache.size;


  while(end < s.length) {
    // create a current variable to track curr char/element
    // it will continue to loop through the chars in s1 and reassign pointers accordingly
    let current = s[end];
    console.log('***:', current);
    // if the current element/char exists in the cache
    if(cache.has(s[current])) {
      // delete the character to avoid duplicates
      cache.set(s[current], cache.get(s[current]) - 1);
      if(cache.get(s[current]) === 0) counter -= 1;
    }
    // increment end value
    end += 1; 
    
    // loop through while counter is set to 0
    while(counter === 0) {
      // check if cache has the start value
      // same as above but now dealing w left variable or "start" character
      let temp = s[start];
      if(cache.has(s[temp])) {
        cache.set(s[temp], cache.get(s[temp]) + 1);
        if(cache.get(s[temp]) > 0) counter += 1;
      }

      if(end - start === p.length) {
        result.push(start)
      }
      start += 1;
    }
  }







  console.log('cache:', cache);
  //console.log('whoa:', cache1);
  // loop through while end is less than length of S
  // while(end < s.length) {
  //   // create a current variable to track curr char/element
  //   // it will continue to loop through the chars in s1 and reassign pointers accordingly
  //   let current = s[end];
  //   // check if current is in hashmap
  //   if(cache[s[current]]) {
  //     cache[s[current]] -= 1;
  //     if(cache[current] === 0) counter -= 1;
  //   }

  //   end += 1;

  //   while(counter === 0) {
  //     let temp = s[start];
  //     // check if temp is in hashmap
  //     if(cache[s[temp]]) {
  //       cache[s[temp]] += 1;
  //       if(cache[temp] > 0) {
  //         counter += 1;
  //       }
  //     }

  //     if(end - start === p.length) {
  //       result.push(start);
  //     }

  //     start += 1;
  //   }
  // }



  return result;
}


// adding this prototype to use for later -> if the character passed is a key in the object, then grab the key and value!
Map.prototype.getOrDefault = function(key, value) {
  return this.has(key) ? this.get(key) : value
}




// * test cases!!
console.log(findAnagrams("cbaebabacd", "abc")); // -> [0,6]
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
console.log(findAnagrams("abab", "ab"
)); // -> [0,1,2]





// ******************************
// if not using the built in Map()
// to find the size of cache the old school way:
Object.size = function(obj) {
  let size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

// Get the size of an object
// var size = Object.size(myObj);