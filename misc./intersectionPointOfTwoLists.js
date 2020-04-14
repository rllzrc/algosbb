// * Intersection Point of Two Lists
// Given the head nodes of two linked lists that may or may not intersect, find out if they intersect and return the point of intersection. Return null otherwise.

// * Description 
// Given the head nodes of two linked lists that may or may not intersect, find out if they do in fact intersect and return the point of intersection. Return null otherwise.
// In the below example, neither lists intersect. intersect() should return NULL.

// * Hints 
// Find the length of both linked lists.
// The linked lists have to physically intersect. This means that their addresses need to be the same. If two nodes have the same data but their addresses are not the same, the lists won’t intersect and the function should return NULL.

// * Solution Specs
// runtime complexity:
// * LINEAR --> 0(m + n) --> m = length of linked list # 1 n = length of linked list # 2
// memory complexity:
// * CONSTANT --> O(1)

// * brute force approach:

// first possible solution: QUADRATIC time complexity --> for each node in the first linked list, another linear scan must be done for the second list. If any node from the first list is found in the second (MUST COMPARE ADDRESSES OF NODES NOT DATA) then that is the INTERSECTION POINT. If none found, no intersection point, return null.

// it works, but its not efficient --> do better >> store nodes on the first linked list in a HashSet. Then go through the second list nodes to check whether any of the nodes exist in the HashSet. This is a linear runtime complexity and liner space complexity ~

// TLDR;
// We can use a much better, i.e., O(m + n)O(m+n), linear time complexity algorithm that doesn’t require extra memory. To simplify our problem, let’s say both the linked lists are of the same size. In this case, you can start from the heads of both lists and compare their addresses. If these addresses match, it means it is an intersection point. If they don’t match, move both pointers forward one step and compare their addresses. Repeat this process until an intersection point is found, or both of the lists are exhausted. How do we solve this problem if the lists are not of the same length? We can extend the linear time solution with one extra scan on the linked lists to find their lengths. Below is the complete algorithm:

// * 1. Find lengths of BOTH linked lists; L1 and L2
// * 2. CALCULATE the difference in length of both lists: difference = | L1-L2 |
// * 3. MOVE head pointer of longer list 'difference' steps forward
// * 4. TRAVERSE both lists, comparing nodes until we find a match or reach the end of lists.

const intersect = (head1, head2) => {
  // declare a variable to keep track of list1node
  let listNode1 = null;
  // get the length of list 1 and store it in a variable
  let listNodeLength1 = getLength(head1);
  // same thing for the second list
  let listNode2 = null;
  let listNodeLength2 = getLength(head2);

  let lengthDifference = 0;

  // check if list 1 is greater than or equal to list 2
  if(listNode1 >= listNode2) {
    lengthDifference = listNodeLength2 - listNodeLength1;
    listNode1 = head2;
    listNode2 = head1;
  }

  // traverse through listNode to calculate difference amount
  while(lengthDifference > 0) {
    listNode1 = listNode1.next;
    lengthDifference -= 1;
  }

  // traverse through the list
  while(listNode1) {
    if(listNode1 === listNode2) {
      return listNode1.data;
    }
    listNode1 = listNode1.next;
    listNode2 = listNode2.next;
  }
  return null;
};

const getLength = head => {
  let listLength = 0;
  while(head) {
    head = head.next;
    listLength += 1;
  }
  return listLength;
}

// List 1: 13, 4, 12, 27
// List 2: 29, 23, 82, 11, 12, 27
// Intersect at 12