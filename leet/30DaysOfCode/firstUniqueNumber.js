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