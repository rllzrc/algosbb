// ** Day 27 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Construct Binary Tree From Inorder And Postorder Traversal }

// T A S K !!
// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// what order the root is traversed
// preorder: root left and right
// inorder: left, root, right
// post: left, right, root

// create a helper function to perform traversals
// first step find the root (inorder = middle) postorder = last element
// locate the root by scanning postorder from right to left to find the root
// go to inorder traversal, locate that root and check the remaning values either on left or right side of it and that is where they will be placed respectively 

// * BFS: scan through the tree level by level --> following order of height from top to bottom. Nodes on higher level will be visited before the ones on the lower level. (Left, Right, Top, Bottom)

// * DFS: depth = priority so start from a root and reach all the way down to certain leaf and then back to root to reach another branch --> preorder, inorder, and postorder depending on the relative order among the root node, left, and right nodes.

// * first attempt:
// create a helper function
const buildTreeHelper1 = (inLeft, postIndex, index, inRight) => {
  // check boundaries, if there are no elements to construct subtrees
  if(inLeft > inRight) return null;

  // grab the last element in postorder arr to get the root
  let rootVal = postorder[postIndex]
  const root = new TreeNode(rootVal);

  // from the root, splits inorder list into left and right subtrees
  let index = map.get(rootVal);

  // perform recursive calls
  postIndex -= 1;
  // build right subtree
  root.right = buildTreeHelper(index + 1, inRight);
  // build left subtree
  root.left = buildTreeHelper(inLeft, index - 1);
  return root;
}

const buildTree1 = (inorder, postorder) => {
  // reference constructor
  this.inorder = inorder;
  this.postorder = postorder;
  // start from the last element in postorder, this will be the root value since post = left, right, root
  postIndex = postorder.length - 1;

  // build a hash map value elements within inorder array --> key = root.val value = index
  let idx = 0;
  for(let val in inorder) {
    const map = new Map();
    map.set(val, idx += 1);
    return buildTreeHelper(0, inorder.length-1)
  }
}

// * second attempt using DFS
const buildTree = (inorder, postorder) => {
  // create a helper function to perform DFS
  function callDFS(arr) {
    // boundary and base case check:
    if(!arr.length) return null;
    // create variables to keep track of last element in postorder array 
    const postRoot = postorder.pop(); // -> this is the root 
    const index = arr.indexOf(postRoot); // --> find the root's index value within the inorder array
    const node = new TreeNode(postRoot); // -> construct new binary tree with found root 

    // build right side leaves
    // slice will grab all of the items to the right of the index value of our postRoot variable
    node.right = callDFS(arr.slice(index + 1));

    // build left side leaves
    // slice will grab all of the items to the left of the index value of our postRoot variable
    // end will not be included. if omitted slice will go until the end of the sequence or arr.length 
    node.left = callDFS(arr.slice(0, index));
    return node;
  }
  return callDFS(inorder);
}