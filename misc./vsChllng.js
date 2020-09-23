// * { Insertion Sort List }

// Sort a linked list using insertion sort.

// Algorithm of Insertion Sort:

//     Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
//     At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
//     It repeats until no input elements remain.

const insert = (head, data, position) => {
  // create pointer variables
  let parent = null;
  let current = head;
  let index = 0;

  while(current && index < position) {
    // reassign values
    parent = current;
    current = current.next;
    index += 1;
  }

  if(current) {
    // insert node here, making child the current
    const child = new Node(current.data);
    child.next = current.next;

    current.data = data;
    current.next = child; 
  } else if(parent) {
    // insert the node at the end of the list
    parent.next = new Node(data);
  } else {
    // create a new head
    head = new Node(data);
  }
  return head; 
}

// Longest Common Subsequence
// using DP

const longestCommonSubsequence = (text1, text2) => {
  // create dp array and length variables
  const dp = [];
  let l1 = text1.length;
  let l2 = text2.length; 

  for(let i = 0; i <= l1; i += 1) {
    dp[i] = new Array(l2 + 1).fill(0); 
  }

  for(let i = 1; i <= l1; i += 1) {
    for(let k = 1; k <= l2; k += 1) {
      // the current char of both texts do not match 
      // of the current char of both texts mathces
      if(text1.charAt(i - 1) !== text2.charAt(k - 1)) {
        // check left and top values for longer subs length
        dp[i][k] = Math.max(dp[i - 1][k], dp[i][k - 1]);
      } else {
        // check diag and prev values for longest sub length + 1
        dp[i][k] = dp[i - 1][k - 1] + 1;
      }
    }
  }
  return dp[l1][l2];
}