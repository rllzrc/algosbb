// ** Day 7 of 30 Days of Code Challenge Part ii -- May Edition! --> { Cousins In Binary Tree ! }

// TASK !!!
// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

// Note:
// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

// * first pass: using recursion! 

  // check if same depth with different parent = true
  // these conditions must be true ^^
  // keep track of these by creating a helper DFS funct --> pass 2 empty arrays one for x and y 
  // root.val = x story parent and level/depth into the array
  // same with y values
  // then check with condition above
  // still look left and right with helper func and while moving down increase depth

const isCousins1 = (root, x, y) => {
  // base case
  if(!root) return false;

  // declare two arrs to hold on to the x and y infos
  let xArr = [];
  let yArr = [];

  // create a variable for the depth and parent values to keep track of
  // start depth at 0 based on the prompt above
  let depth = 0;
  // null bc initiall parent is none
  let parent = null; 

  // invoke helper function
  dfsHelper(root, x, y, depth, parent, xArr, yArr);
  // if the depth is the same but the parents are different return true, else false
  return (xArr[0][0] === yArr[0][0]) && (xArr[0][1] !== yArr[0][1]);
  
}

const dfsHelper = (root, x, y, depth, parent, xArr, yArr) => {
  // base case
  if(!root) {
    return null;
  }

  // this is where we will add the depth and parent info to our arrays
  if(root.val === x) {
    xArr.push(depth)
    xArr.push(parent);
  }

  // same logic as above but for the left side
  if(root.val === y) {
    yArr.push(depth);
    yArr.push(parent);
  }
  
  // check left and right values once at current node
  // while increasing depth
  dfsHelper(root.left, x, y, depth + 1, root, xArr, yArr);
  dfsHelper(root.right, x, y, depth + 1, root, xArr, yArr); 
}

// * second attempt using DFS approach:
const isCousins = (root, x, y) => {
  // invoke helper function here
  const dfsHelper = (val, currRoot = root, parent = null, depth = 0) => {
    // base case
    if(!currRoot) return false;

    if(currRoot.val === val) return [depth, parent];
    depth += 1;

    return dfsHelper(val, currRoot.right, currRoot.val, depth) || dfsHelper(val, currRoot.left, currRoot.val,depth);
  }

  const [depthX, parentX] = dfsHelper(x);
  const [depthY, parentY] = dfsHelper(y);

  return (parentX !== parentY) && (depthX === depthY);
}

// * test cases !!!
console.log(isCousins(root = [1,2,3,4], x = 4, y = 3)); // -> false
console.log(isCousins(root = [1,2,3,null,4,null,5], x = 5, y = 4)); // -> true
console.log(isCousins(root = [1,2,3,null,4], x = 2, y = 3)); // -> false
