// ** Day 12 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Insert Delet GetRandom O(1) ! }

// T A S K ~
// Design a data structure that supports all following operations in average O(1) time.

// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

/**
 * Initialize your data structure here.
 */
// var RandomizedSet = function(val) {
//   // create object DS
  
// };

class RandomizedSet {
  // create object DS
  constructor() {
    this.dictionary = {};
    this.list = [];
  }

  insert(key) {
    // check if value is in dictionary
    if(this.dictionary[key]) {
      return false;
    } 

    this.list.push(key);
    this.dictionary[key] = this.list.length;
    return true; 
  }

  
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
// RandomizedSet.prototype.insert = function(val) {
//     // check if
// };


/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */