// ** Days of Code Challenge Part X  
// ** --> { maximum difference between node and ancestor !!! }

// T A S K !
// Given the root of a binary tree, find the maximum value V for which there exist different nodes A and B where V = |A.val - B.val| and A is an ancestor of B.

// A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.

const maxAncestorDiff = root => {
  let res = 0;
  
  recursive(root, root.val, root.val);
  
  return res;
  
  function recursive(node, minSoFar, maxSoFar)
  {
      if(!node)
          return;

      let diffWithMax = maxSoFar - node.val;

      let diffWithMin = node.val - minSoFar;
      
      res = Math.max(res, diffWithMax , diffWithMin);

      minSoFar = Math.min(minSoFar,node.val);
      maxSoFar = Math.max(maxSoFar, node.val);
      
      recursive(node.left, minSoFar, maxSoFar);
      recursive(node.right, minSoFar, maxSoFar);

  }
};
