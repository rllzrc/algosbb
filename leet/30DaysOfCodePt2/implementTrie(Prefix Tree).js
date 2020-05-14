// ** Day 13 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Implement Trie (Prefix Tree) ! }

// T A S K !!
// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children = {};
  this.end = false;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {

  let loop = this;
  for(let i = 0; i < word.length; i += 1) {
    if(loop[word[i]]) {
      loop = loop[word[i]]
    } else {
      loop[word[i]] = new Trie();
      loop = loop[word[i]];
    }
  }

  loop.end = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let loop = this;
  for(let i = 0; i < word.length; i += 1) {
    if(loop[word[i]]) {
      loop = loop[word[i]];
    } else {
      return false;
    }
  }
  return loop.end === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let loop = this;
  for(let i = 0; i < prefix.length; i += 1) {
    if(loop[prefix[i]]) {
      loop = loop[prefix[i]];
    } else {
      return false;
    }
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */