// ** AE: Graphs Daily Reps Challenge
// ** --> { breadth-first search !!! }

// T A S K !!

// Implement the breadthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it. 

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // edge case:
    if(!array || array.length === 0) return;
    // create queue variable, pass in node or vertex in graph
    const queue = [this];
    // iterate while queue has length aka items or nodes in it
    while(queue.length > 0) {
      // grab the first item (node, parent, vertex) in the queue
      const current = queue.shift();
      // push its children into the array
      array.push(current.name);
      // check if current has any children values (nodes, vertexes, make sure to access its correct key)
      for(const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}