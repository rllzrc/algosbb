// * Basic Tree Recursion Practice

// Given the root of a binary tree that stores ints, convert the tree in-place such that each nodes stores the sum of all the elements in its left and right subtree. 

// * roadmap:
// 1. create a helper function for recursion. in some cases, its best not to use it in your main function since you might want to add extra parameters in the recursive stack. always thinking about making a helper will save you laaaaater sk8r ~
// 2. solve for the easiest possible case first. often, its if the node is null! add extra base cases if needed
// 3. if a magic function exists, you can pass the left and right subtree too --> this should return the exact values you need to solve for the current node >> it should return the sum of all elements of the subtree ya pass into it
// 4. keep doing the relevant operation for the current node
// 5. return something useful for the parent node
// 6. " If you wrote code that consistently reaches the base case and you return out a useful value for the parent node, you can fully trust recursion."

// * PRO TIP! most tree recursion is simply a DFS approach with a few extra lines depending on what you need to do 
const inPlaceSumHelper = root => {
  // quick edge case check if root is not a thing
  if(!root) return 0;

  // here is where our recursive calls start
  let leftSum = inPlaceSumHelper(root.left);
  let rightSum = inPlaceSumHelper(root.left);

  // okay cool once you get those values, do something with it!
  let temp = root.val; // --> gonna need this bad boiii later
  root.val = leftSum + rightSum;

  // return it out
  return temp + leftSum + rightSum;
}

const inPlaceSum = root => {
  return inPlaceSumHelper(root);
}