// ** Leetcode: Arrays Reps Challenge  ~ BST Edition ~
// ** --> { #235 LCA of a Binary Search Tree }

// T A SK !!!

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// * first attempt:
// * time complexity: O(N)
// * space complexity: O(1)

const lowestCommonAncestor = (root, p, q) => {
  let pVal = p.val;
  let qVal = q.val;

  const node = root;

  while(node !== null) {
    let parent = node.val;

    if(pVal > parent && qVal > parent) {
      // if both p and q are greater than parent, check right side
      node = node.right;
    } else if(pVal < parent && qVal < parent) {
      // if botg are lesser, check right
      node = node.left;
    } else {
      // we found the LCA here!
      return node;
    }
  }
  return null;
}

