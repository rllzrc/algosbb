// ** Day 7 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Vertical Order Traversal of a Binary Tree !! }

// T A S K !!
// Given a binary tree, return the vertical order traversal of its nodes values.

// For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).

// Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).

// If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.

// Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

// * first attempt:
// order condition: get nodes from left most vertical to right most vertical
// in the same vertical, nodes w a higher level will be added first
// in same vertical and same level nodes will be sorted

// use dfs to get the left most boundary of the tree to correctly map the node index to the array index
// another dfs to traverse the nodes and record its vertical index & height information in the arr
// rearrange the arr to meet order requirements
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {number[][]}
 */
//

const verticalTraversal1 = root => {
  // create a variable to find left boundary
  toTheLeft = null;

  // create dfs function
  let dfs = function(root, i) {
    // base case
    if(!root) return;
    // run dfs on left side
    dfs(root.left, i - 1);
    // reassign left val
    toTheLeft = Math.min(toTheLeft, i);
    // run on right side
    dfs(root.right, i + 1);
  }
  // find the left boundary
  dfs(root, 0);

  // create arr to store index and height values
  let arr = [];

  // second dfs to traverse nodes & record vertical index and height info into arr
  let dfs2 = function(root, x, y) {
    // base case
    if(!root) return;

    if(arr[x - toTheLeft] === null) {
      arr[x - toTheLeft] = {};
    };

    if(arr[x - toTheLeft][y] === null) {
      arr[x - toTheLeft][y] = [];
    };

    arr[x - toTheLeft][y].push(root.val);

    dfs(root.left, x - 1, y + 1);
    dfs(root.right, x + 1, y + 1);
  }

  dfs2(root, 0, 0);

  // rearrange arr to meet order requirements
  let output = arr.map((vertical) => {
    let levels = [];
    Object.keys(vertical).forEach((level) => {
      vertical[level].sort((a, b) => a - b);
      levels.push(...vertical[level]);
    })
    return levels;
  });

  return output;
};

// * second attempt: alt inOrderTraversal
// to visit leftmost node (vertically) and most nodes sorted by x coordinates
const verticalTraversal = root => {
  // hold the x, y, and values of each node traversed
  const nodeInfo = [];
  // run helper function 
  getNodeInfo(root, 0, 0);
  // sort by the following - in order of importance:
  // 1. x coordinate
  // 2. y coordinate
  // 3. node value in ascending order
  nodeInfo.sort((a, b) => a[0] - b [0] || b[1] - a[1] || a[2] - b[2]);
  // create a map to store values in 
  const map = new Map();
  // iterate over nodeInfo to map out key/val pairs in ... map ahhh ha..
  for(let [x, y, val] of nodeInfo) {
    if(!map.has(x)) map.set(x, []);
    map.get(x).push(val);
  }

  return [...map.values()];

  function getNodeInfo(node, x, y) {
    if(node) {
      // traverse to the left
      getNodeInfo(node.left, x - 1, y - 1);
      nodeInfo.push([x, y, node.val]);
      // traverse to the right
      getNodeInfo(node.right, x + 1, y - 1);
    }
  }
};

// * test cases!!
console.log(verticalTraversal([3,9,20,null,null,15,7])); // -> [[9],[3,15],[20],[7]]
console.log(verticalTraversal([1,2,3,4,5,6,7])); // -> [[4],[2],[1,5,6],[3],[7]]