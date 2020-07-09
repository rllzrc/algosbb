// ** Day 9 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Maximum Width of Binary Tree ! }

// T A S K !!
// Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

// The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

// * first attempt:
const widthOfBinaryTree = (root) => {
  const queue = [{ node: root, pos: 0}];
  let maxWidth = 0;
  
  while(queue.length) {
      const levelLength = queue.length;

      let min = Number.MAX_VALUE,
          max = 0;

      for(let i = 0; i < levelLength; i++) {
          const curr = queue.pop();
          min = Math.min(min, curr.pos);
          max = Math.max(max, curr.pos);
          
          if(curr.node.left) queue.unshift({ node: curr.node.left, pos: curr.pos * 2 + 1 });

          if(curr.node.right) queue.unshift({node:curr.node.right, pos: curr.pos * 2 + 2 });
      }
      
      const levelWidth = levelLength === 1 ? 1 : max - min + 1;
      maxWidth = Math.max(maxWidth, levelWidth);
  }
  
  return maxWidth;
};