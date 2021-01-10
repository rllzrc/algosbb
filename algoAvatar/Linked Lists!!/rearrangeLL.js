// ** AE: Linked List Reps Challenge  
// ** --> { Rearrange Linked List !!! }

// T A SK !!!

// Write a function that takes in the head of a Singly Linked List and an integer k, rearranges the list in place (i.e., doesn't create a brand new list) around nodes with value k, and returns its new head. 

// Rearranging a Linked List around nodes with value k means moving all nodes with a value smaller than k before all nodes with value k and moving all nodes with a value greater than k after all nodes with value k. 

// All moved nodes should maintain their original relative ordering if possible. 

// Note that the linked list should be rearranged even if it doesn't have any nodes with value k. 

// Each linked list node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

// You can assume that the input Linked List will always have at least one node; in other words, the head will never be None / null.

// * this is the class of the input linked list
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const rearrangeLinkedList = (head, k) => {
  
}