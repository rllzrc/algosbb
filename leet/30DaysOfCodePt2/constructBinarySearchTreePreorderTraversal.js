// ** Day 24 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Construct Binary Search Tree from Preorder Traversal ! }

// T A S K !!

// solved for April challenge; attempting again for practice..(Day 20)
// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

// * first attempt!

// preorder: root, left, right
// inorder: left, root, right -> ascending
// use recursion to find further nodes for left and right side
const bstFromPreorder = preorder => {
  // create an inorder list of bst by sorting
  const inorder = preorder.sort((a,b) => a - b);

  // create helper function
  bstInAndPreOrderHelper = (preorder, inorder) => {
    // declare variables to hold on to length values for clarity
    let lengthPre = preorder.length;
    let lengthIn = inorder.length;

    // check if length values are not the same as inorder, null, or = 0 --> aka base case ~
    if(lengthPre !== lengthIn || preorder === null || inorder === null || lengthPre === 0) {
      return null;
    };

    // define root values
    let root = preorder[0];
    // to track where we are on the left and right sides
    let rootIndex = inorder.indexOf(root.val);

    // recursion will process all of the deeper nodes on left and right side
    root.left = bstInAndPreOrderHelper(preorder[rootIndex + 1], inorder[rootIndex]);

    root.right = bstInAndPreOrderHelper(preorder[rootIndex + 1], inorder([rootIndex + 1]));
  
    return root;
  }
  // return/invoke helper function using recursion
  return bstInAndPreOrderHelper(preorder, inorder);
}

// * test cases!
console.log(bstFromPreorder([8,5,1,7,10,12])); // -> [8,5,10,1,7,null,12]