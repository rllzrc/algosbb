// ** Days of Code Challenge Part X  
// ** --> { Minimum Depth Of Binary Tree !!! }

// T A SK !!!

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// * first attempt: 
const minDepth = root => {
  if (root == null) return 0;
    
  let min = Number.MAX_SAFE_INTEGER;
  
  findMin(root, 1);
  
  return min;
  
  function findMin(node, depth) {
      // base
      if (node == null) return 0;
      
      if (node.left == null && node.right == null) {
          min = Math.min(min, depth);
      }
      
      findMin(node.left, depth + 1);
      findMin(node.right, depth + 1);
  }
}
