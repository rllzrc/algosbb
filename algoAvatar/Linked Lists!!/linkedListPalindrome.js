// ** AE: Linked List Reps Challenge  
// ** --> { Linked List Palindrome !!! }

// T A SK !!!

// Write a function that takes in the head of a Singly Linked List and returns a boolean representing whether the linked lists' nodes form a palindrome. Your function shouldn't make use of any auxiliary data structure.

// A palindrome is usually defined as a string that's written the same forward and backward. For a linked list's nodes to form a palindrome, their values must be the same when read from left to right and from right to left. Note that single-character strings are palindromes, which means that single-node linked lists form palindromes. 

// Each linked list node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's at the tail of the list. 

// You can assume that the input linked list will always have at least one node; in other words, the head will never be None / null. 

// * --- Roadmap --- *
// input: head of singly linked list
// output: boolean value stating whether or not the list is a palindrome
// constraints: optimize, cannot use any additional data structures
// edge cases: recursive solution works for traversing the LL, but adds additional call stacks, use reverseLL method instead

// * time complexity: O(N) - linear >> N = number of nodes in LL
// * space complexity: 

// * this is the class of the input linked list
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create a class to store two values returning from recursive calls
// pro-tip: two values returning from recursive method so we will need to store these two values and their different types
class LinkedListInfo {
  // outerNodesAreEqual -> boolean value representing the equality of all the comparisons of left and right nodes >> this is the return value from the main function, it will be the boolean that will ultimately represent if the LL is a palindrome or not
  // leftNodeToCompare -> the updated left node (.next value) as we go forwards into the LL
  constructor(outerNodesAreEqual, leftNodeToCompare) {
    this.outerNodesAreEqual = outerNodesAreEqual;
    this.leftNodeToCompare = leftNodeToCompare;
  }
}

// * recursive solution
// * Time: O(N) -> N = number of nodes in LL
// * Space: O(N) -> due to recursive call stacks
const linkedListPalindrome1 = head => {
  // store results of recursive function into a variable
  // the isPalindrome recursive function will return two values:
  // so we store the result into a variable under isPalindromeResults so we can extract out the value we want later
  // which is a boolean that represents if the LL is a palindrome or not
  const isPalindromeResults = isPalindrome(head, head);
  return isPalindromeResults.outerNodesAreEqual; 
}

// * recursive function that will handle most of the logic for our main function above
// two pointers: leftNode (@head) and rightNode (@tail)
// left will traverse forward, right backwards testing the symmetry of the LL at each call 
const isPalindrome = (leftNode, rightNode) => {
  // base case - we're at the end of the LL
  if(rightNode === null) {
    // thus there is only one node on the list, so return true (for property outerNodesAreEqual within LLInfo class, we will use this value to return out later to determine if the entire LL is a palindrome)
    // we didn't do anything here, thus true and original leftNode is passed into the new LinkedListInfo structure
    return new LinkedListInfo(true, leftNode);
  }

  // pro-tip: at each recursive call, our return values are whether or not the current pairings are equal (under recursiveIsEqual variable + the next left node to compare)
  const recursiveCallResults = isPalindrome(leftNode, rightNode.next);

  // similar strategy as above in line 50, store results in variable and extract pertinent values (outerNodes + leftNodeToComp)
  // all of the results of the recursive call at each iteration will be stored under the outerNodesAreEqual variable
  const {leftNodeToCompare, outerNodesAreEqual} = recursiveCallResults;
  
  // to compare the left and right nodes as we recursively iterate through the LL 
  // * outerNodesAreEqual -> represents all the previous comparisons and whether the LL is a palindrome so far
  // so this combines current and all past comparisons
  // * recusiveIsEqual -> will be the updated value that will get passed as the ~ new ~ outerNodesAreEqual value
  const recursiveIsEqual = outerNodesAreEqual && leftNodeToCompare.value === rightNode.value;
  // update the left node so it keeps moving forward 
  const nextLeftNodeToCompare = leftNodeToCompare.next; 

  return new LinkedListInfo(recursiveIsEqual, nextLeftNodeToCompare);
};

// * OPTIMIZED * iterative approach - space complexity reduced!
// * time: O(N) -> N = number of nodes in LL
// * space: O(1) -> not using recursion anymore so no extra stack space
// the TLDR; traverse halfway thru LL, reverse second half, then compare nodes from both halves to determine if LL is a palindrome
const linkedListPalindrome = head => {
  // declare pointer variables to traverse LL
  let slowNode = head;
  let fastNode = head; 
  // slow moves 1x, fast 2x so by the time fast reaches the end slow will be pointing to the halfway point (mid)
  while(fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  // then reverse the second half of the list!
  // take the middle node (the head of the second half) pass it into the reverse helper method
  let reversedSecondHalfNode = reverseLinkedList(slowNode);
  // compare first half and second half for symmetry 
  let firstHalfNode = head;
  // traversing the right side of the LL, use right side first
  while(reversedSecondHalfNode !== null) {
    if(reversedSecondHalfNode.value !== firstHalfNode.value) {
      return false;
    }
    // continue to traverse
    reversedSecondHalfNode = reversedSecondHalfNode.next;
    firstHalfNode = firstHalfNode.next; 
  }
  return true; 
};

// * helper method to reverse second half, review of previous reverseLL challenge
function reverseLinkedList(head) {
  // declare pointer variables
  let previousNode = null;
  let currentNode = head;
  while(currentNode !== null) {
    // create a variable to have reference to the next node + store its value prior to overwriting 
    const nextNode = currentNode.next;
    // swap the next pointer to the previousNode (to perform reversal)
    currentNode.next = previousNode;
    // set prev to be current
    previousNode = currentNode;
    // set current to next node
    currentNode = nextNode; 
  }
  return previousNode; 
};

