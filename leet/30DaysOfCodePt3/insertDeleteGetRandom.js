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

class RandomizedSet1 {
  // create object DS
  constructor() {
    this.dictionary = {};
    this.list = [];
  }

  insert(key) {
    // check if value is in dictionary
    if(this.dictionary[key]) return false;

    this.list.push(key);
    this.dictionary[key] = this.list.length;
    return true; 
  }

  remove(key) {
    // check if val is in dictionary
    if(this.dictionary[key]) {
      // create a variable to hold on to swap values
      let lastElement = this.list[this.list.length-1];
      let keyIndex = this.dictionary[key];

      // perform swap
      this.list[keyIndex] = lastElement;
      this.dictionary[lastElement] = keyIndex;

      // pop to remove item in constant time
      this.list.pop();
      // delete the key from dictionary
      this.dictionary[key] = null;
      
      return true;
    }
    return false;
  }

  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex]

  }
}

// * second attempt:

class RandomizedSet {
  constructor() {
    this.dictionary = new Map();
    this.list = [];
  }

  insert(key) {
    // check if map already has key
    if(this.dictionary.has(key)) return false;

    // if not, add it to the dictionary / hash map obj 
    this.dictionary.set(key, this.list.length);
    // push key into list arr
    this.list.push(key);
    
    return true;
  }

  remove(key) {
    // check if key is in dictionary, if not return false
    if(!this.dictionary.has(key)) return false;

    // create pointer variables to perform swap in array to be able to pop off in O(1) time
    const keyIndex = this.dictionary.get(key);
    const lastIndex = this.list.length-1;
    const lastKey = this.list[lastIndex];

    // perform swap key with last element
    [this.list[keyIndex], this.list[lastIndex]] = [this.list[lastIndex], this.list[keyIndex]];
    // remove or pop the key from the array
    this.list.pop();
    // update the last element's index to be the current keys'
    this.dictionary.set(lastKey, keyIndex);
    // delete the key from the map cache obj
    this.dictionary.delete(key);
    return true;
  }

  getRandom() {
    // create a variable to hold on to random index
    const randomIndex = Math.floor(Math.random() * this.list.length);

    return this.list[randomIndex];
  }
}