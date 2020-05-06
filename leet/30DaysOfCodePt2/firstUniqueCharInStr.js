// ** Day 5 of 30 Days of Code Challenge Part ii -- May Edition! --> First Unique Character in a String

// TASK !!
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// * Examples!
// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.

// * first pass:
const firstUniqueChar1 = s => {
  // create a cache object to store chars
  let cache = {};
  // create a length variable for easy access
  let length = s.length;

  // use LRU cache and a doubly linked list for faster insertion and lookup time O(1) constant time
  const Node = function(index) {
    this.index = index;
  }

  let head = new Node(-1), tail = new Node(-1);
  head.next = tail; 
  tail.prev = head;

  // loop through chars in string
  for(let i = 0; i < length; i += 1) {
    // create a new variable to hold on to the current character
    let current = s[i];

    // check if cache doesnt have this character in yet, if not add it
    if(!cache[current]) {
      cache[current].next.prev = cache[current].prev;
      cache[current].prec.next = cache[current].next;
      cache[current] = null;
    } else {
      let char = new Node(i);
      char.prev = tail.prev;
      char.next = tail;
      tail.prev.next = char;
      tail.prev = char;
      cache[current] = char;
    }
  }
  return head.next.index;
}

// * second attempt:
// time complexity: 
// * O(n) --> Linear w loops

const firstUniqueChar = s => {
  // create a cache variable
  let cache = {};
  // initiate a result variable
  let result = -1;

  // loop through chars in str
  for(let i = 0; i < s.length; i += 1) {
    let current = s[i];
    // if not yet in cache, add it!
    if(!cache[current]) {
      cache[current] = 1;
    } else {
      // if the char is already there, increase value
      cache[current] += 1;
    }
  }

  // loop again once cache is populated and check which value only occurs once
  for(let i = 0; i < s.length; i += 1) {
    if(cache[s[i]] === 1) {
      return i;
    }
  }
  return result;
}

// * test cases!!
console.log(firstUniqueChar('leetcode')); // --> 0
console.log(firstUniqueChar('loveleetcode')); // --> 2
