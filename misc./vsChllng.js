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