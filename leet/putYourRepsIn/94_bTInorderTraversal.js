// ** Leetcode: Arrays Reps Challenge  ~ Traversal Edition ~
// ** --> { #94 Binary Tree Inorder Traversal }

// T A SK !!!

// Given the root of a binary tree, return the inorder traversal of its nodes' values

// * first attempt ~
// * time complexity: O(N)
// * space complexity: O(N)
const inorderTraversal = (root, output = []) => {
  // edge case check 
  if(!root) return output;
  if(root !== null) {
    inorderTraversal(root.left, output);
    output.push(root.value);
    inorderTraversal(root.right, output);
  }
  return output; 
}

// * second attempt: iteratively ~
const inorderTraversal2 = (root) => {
  const stack = [];
  const output = [];
  let node = root;
  while(node || stack.length) {
    if(node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      output.push(node.val);
      node = node.right;
    }
  }
  return output;
}