// ** 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Sum Of Root To Leaf Binary Numbers !!! }

// T A S K !!!

//Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers.

// * first attempt: 
const sumRootToLeaf = (root) => {
  return findAllBins(root, 0);
    
  function findAllBins(node, b) {
      // quick edge case check: base case
      if (node == null) return 0;
      
      // use left shift
      b = (b << 1) | node.val;
      
      if (node.left == null & node.right == null) return b;
      
      return findAllBins(node.left, b) + findAllBins(node.right, b);
  }
};

