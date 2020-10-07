// ** Days of Code Challenge Part X -- August Edition! 
// ** --> { Subarry Sum Equals K !!! }

// T A S K !!
// You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

// * first attempt:
const insertIntoBST = (root, val) => {
  let newTreeNode = new TreeNode(val);

  if(!root)
      return newTreeNode;

  let cursor = root, prev = null;
  while(cursor) {
      prev = cursor;
      if(cursor.val < val)
          cursor = cursor.right;
      else
          cursor = cursor.left;
  }

  if(prev.val > val)
      prev.left = newTreeNode;
  else
      prev.right = newTreeNode;

  return root;
}
