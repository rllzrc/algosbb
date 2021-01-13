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
// edge cases: 

// * time complexity: O(N) - linear >> N = number of nodes in LL
// * space complexity: 

// * this is the class of the input linked list
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedListPalindrome = head => {

}