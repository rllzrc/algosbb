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
  return this.items[this.items.lenght-1];
};

MinStack.prototype.getMin = function() {
  
  // initialize a min variable and set it to first item in the stack
  let min = this.items[0];

  // loop through stack and reassign min value to whichever it finds to be the least 
  for(let i = 0; i < this.items.length; i += 1) {
    if(this.items[n] < min) {
      min = this.items[n];
    }
  }

  // return out min value
  return min;
};
