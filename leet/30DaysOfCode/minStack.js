// * Day 9 of 30 Days of Code --> minStack!
// TASK! 

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// * example implementation:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

// * stacks = FILO, first in last out

// * getMin : use the two stack approach 
// introduce another stack to perform minStack operation --> two stacks: second stack will keep track of the minimum value in stack 1
// stack 2 will be the support tracker
// compare the elements to check top value in support stack --> whichever is smaller value push into support stack

// * first pass:

/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.stack = [];
};

MinStack.prototype.push = function(x) {
  // push items into the end/top of the stack
  this.items.push(x);
};

MinStack.prototype.pop = function() {
  // remove items from the top of the stack, remember to return value out since its popped
  return this.items.pop();
};

MinStack.prototype.top = function() {
  // pretty much similar to pop, but instead of removing the element, we're just retrieving it
  return this.items[this.items.length-1];
};

MinStack.prototype.getMin = function() {
  
  // initialize a min variable and set it to first item in the stack
  let min = this.items[0];

  // loop through stack and reassign min value to whichever it finds to be the least 
  for(let i = 0; i < this.items.length; i += 1) {
    if(this.items[i] < min) {
      min = this.items[i];
    }
  }

  // return out min value
  return min;
};

// * second attempt:

// * constructor below:

const MinStack = function() {
  this.minStack = [];
  this.secondStack = [];
};

// push method:
MinStack.prototype.push = function(x) {
  // use the second stack as a tracker
  this.secondStack.push(x);

  //edge case check: 
  // if its empty or if the last item on minStack (top element) is less than or equal to x (input passed)
  if(this.minStack.length === 0 || x <= this.minStack[this.minStack.length-1]) {
    this.minStack.push(x);
  }
};

// pop method:

MinStack.prototype.pop = function() {
  // remove item from second stack tracker and store it in a variable to hold on to it for later
  let x = this.secondStack.pop();
  // check minStack and see if x value === last element or top element in minStack
  if(x === this.minStack[this.minStack.length-1]) {
    this.minStack.pop();
  }
};

// top method:

MinStack.prototype.top = function() {
  // grab the last in/top element and return it out
  return this.secondStack[this.secondStack.length-1];
};

// getMin method:
MinStack.prototype.getMin = function() {
  // return the top element (not removing)
  return this.minStack[this.minStack.length-1];
}