// ** @mcrsft Linked List Reps Challenge  
// ** --> { intersection of two linked lists !!! }

// T A SK !!!

// Write a program to find the node at which the intersection of two singly linked lists begins.


If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Each value on each linked list is in the range [1, 10^9].
Your code should preferably run in O(n) time and use only O(1) memory.


// * --- Roadmap --- *
// input: two linked lists (head a, head b)
// output: reference of the node's value in which intersection occurs
// constraints: optimize, perform operations in place (must retain OG structure) 
// edge cases: if no intersection, return null. per the prompt, no cycles in given inputs + optimize -> preferably O(n) time + O(1) memory 

// * main squeeze:
// declare 3 pointer variables to keep track of 3 nodes at once
// as long as currNode1 + currNode2 are not null, keep traversing the list
// check for the simple case of is currNode1's value is less than currNode2

// * time complexity:
// * space complexity: 