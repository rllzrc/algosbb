// * Day 28 of 30 Days of Code --> First Unique Number

// TASK !!!
// You have a queue of integers, you need to retrieve the first unique integer in the queue.

// Implement the FirstUnique class:

// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.

// * Example:
// Input: 
// ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
// [[[2,3,5]],[],[5],[],[2],[],[3],[]]
// Output: 
// [null,2,null,2,null,3,null,-1]

// * HINTS !!
// Use doubly Linked list with hashmap of pointers to linked list nodes. add unique number to the linked list. When add is called check if the added number is unique then it have to be added to the linked list and if it is repeated remove it from the linked list if exists. When showFirstUnique is called retrieve the head of the linked list.
// Use queue and check that first element of the queue is always unique.
// Use set or heap to make running time of each function O(logn).

// * first pass
// use queue to keep track of add
// use a dictionary map to keep track of number and frequency --> num(key) freq(value)
// check if num is in dictionary or not

var FirstUnique = function(nums) {
  // initalize queue and dictionary variables
  const queue = [];
  const dictionary = {};

  // loop through the elements in num

  for(let i = 0; i < nums.length; i += 1) {
    add(arr[i]);
  }   
};

FirstUnique.prototype.showFirstUnique = function() {
  // check while length of queue > 0
  // and frequency of number is more than 1
  while(queue.length > 0 && dictionary[0] > 1) {
    // that means the number is not unique, so remove it from queue
    queue.pop();

    // if queue is empty, first unique is not found so return -1
    if(queue.length === 0) {
      return -1;
    } else {
      // return the first element from the queue
      return queue.shift();
    }
  }
};

FirstUnique.prototype.add = function(value) {
  // check values in dictionary
  // if its already there, add one to its value
  if(dictionary.hasOwnProperty(value)) {
    dictionary[value] += 1;
  } else {
    // add it to the dictionary if its not already there and push it into the queue
    dictionary[value] = 1;
    queue.push(value);
  }
};

// * second attempt:

// basing off another leetcoder's JS approach:
// runtime complexity:
// * O(n) --> initialization time / O(1) add & retrieve time

// *** PRO-TIPS!

// If an element passed to the add function is already in the uniques set, delete it from there and add it to the dupes set at that time. If an element is already in the dupes set, skip it. If the element didn't exist anywhere, add it to the uniques set. Since writing and deleting with sets are O(1), this means all of our set manipulation ops are O(1).

// The JS API makes our lives relatively easy by retaining input order in sets, so we can use a keys() iterator value to get the first element every time. This is O(1) time.
var FirstUnique = function(nums) {
  this.unique = new Set()
  this.dupes = new Set()
  nums.forEach(e => this.add(e)) // invoke add method here, defined below, adds all of the elements to each set
}

FirstUnique.prototype.showFirstUnique = function() {
  // check if there are no items in the unique set
  if(this.unique.size === 0) return -1;
  // grabs the values from the unique set, checks the next item and retrieves the value from that object generator
  return this.unique.values().next().value 
}

FirstUnique.prototype.add = function(n) {
  // check if the current element in nums is already a duplicate value
  if(this.dupes.has(n)) return;
  // if it is not in dupes or a unique value, add to sets and return out
  if(!this.unique.has(n)) return this.unique.add(n);

  // if duplicate is found and need to handle removing it from unique and dupes list
  this.unique.delete(n);
  this.dupes.add(n);
  return
};



var FirstUnique = function(nums) {
  this.uniques = new Set()
  this.dupes = new Set()
  nums.forEach(n => this.add(n))    // use FirstUnique.prototype.add, defined below
};

FirstUnique.prototype.showFirstUnique = function() {
  if (this.uniques.size == 0) return -1      // early return if no uniques
  return this.uniques.values().next().value  // use iterator to get first unique
};

FirstUnique.prototype.add = function(n) {
  if (this.dupes.has(n)) return                           // already duplicate? skip!
  if (!this.uniques.has(n)) return this.uniques.add(n)    // not dupe *or* unique? add and early return

  // handle item needing to be moved from unique list to dupe list
  this.uniques.delete(n)
  this.dupes.add(n)
  return
};