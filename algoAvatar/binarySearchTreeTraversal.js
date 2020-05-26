// * Get Your Reps In ~ !!
// * B I N A R Y Search Tree Traversals ~

// The following will be Depth-First traversal types -> visit the complete subtree of those divisions:

// preorder/inorder -> types of order depending on the root
// pre: root, left, right
// inorder: left, root, right
// post: left, right, root

// time complexity:
// * O(n) -> n being the number of nodes the tree has -> constant time
// space complexity:
// * O(n) -> storing all the nodes values in arr // if printing: O(d) or depth, adding frames onto the callstack

// * inOrder traversal: using recursion ~
// ex: sorting in an ascending order [1,2,5,5,10,15,22]
// always has you look at the left node, then current, then right
// pattern: whenever on a given node, call the inorder function on that node
// traverse left most node, then grab the current node, then go on the right side

const inOrder = (tree, arr) => {
  // quick edge case check
  if(tree !== null) {
    // invoke inorder function on left subtree passing in array
    inOrder(tree.left, arr);
    arr.push(tree.value);
    inOrder(tree.right, arr);
  }

  return arr;
}