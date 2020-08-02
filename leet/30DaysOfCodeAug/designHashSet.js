// ** Day 2 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Design HashSet ! }

// T A S K !! ~
// Design a HashSet without using any built-in hash table libraries.

// To be specific, your design should include these functions:

//     add(value): Insert a value into the HashSet. 
//     contains(value) : Return whether the value exists in the HashSet or not.
//     remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

/**
 * Initialize your data structure here.
 */
//

const MyHashSet = function() {
  this.set = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
//

MyHashSet.prototype.add = function(key) {
  this.set[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
//

MyHashSet.prototype.remove = function(key) {
  delete this.set[key];
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
//

MyHashSet.prototype.contains = function(key) {
  return this.set[key] ? true : false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
//
