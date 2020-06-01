// * Chapter 7 Practice --> Dijkstra's Algorithm 

// * start by creating three hashtables
// graph
// cost 
// parents
// * update the costs and parents hash tables as the algo progresses


// * first hash will be info about the graph
const graph = {};

// to represent the weights of the edges
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

// add the rest of the nodes and their neighbors on the graph 
graph['a'] = {};
graph['a']['fin'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

graph['fin'] = {};

//console.log(graph);
// * second hash table will hold the costs
// the cost of a node is how long it takes to get to that node from the start >> if you don't know the cost yet, mark as Infinity for now
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

// * third hash table will represent parents of each node
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

// * create a processed array to keep track of all the nodes you've already processed because you don't need to process a node more than once
const processed = [];

// * Dijkstra's Algo:
const findLowestCostNode = costs => {
  // create two variables to keep track of lowestCost as well; as the lowestCosts node
  let lowestCost = Infinity;
  let lowestCoseNode = null;

  // iterate through each node value
  for(let node in costs) {
    // create a variable to keep track of current node
    let cost = costs[node];
    // check if it is the lowest cost so far and it hasnt been processed yet
    if(cost < lowestCost && (processed.indexOf(node) === -1)) {
      // if so reassign values; lowestCost will now be cost
      lowestCost = cost;
      // will keep track which node is the shortest path aka cheapest
      lowestCostNode = node;
    }
  }
  
  // find the lowest cost node that hasn't been processed yet
  let node = findLowestCostNode(cost);

  // base case; if you've processed all the nodes the while loop ends
  while(node !== null) {
    // create a variable to keep track of the current node
    let cost = costs[node];
    // create a varaible to keep track of the current nodes neighbors
    let neighbors = graph[node];
    console.log(neighbors);
    // go through all the neighbors in the node, check the graph and use object.keys to retrieve those values
    // e = neighborNode
    Object.keys(neighbors).forEach(e => {
      // create a variable to keep track of newCost
      let newCost = cost + neighbors[e];
      // if it is cheaper to get to this current neighbor by going through this node
      if(costs[e] > newCost) {
        // update the cost for this node
        costs[e] = newCost;
        // this node becomes the new parent for this neighbor node
        parents[e] = node;
      }
    });
    // mark the node as being processed
    processed = processed.concat(node);
    // run the funciton again to find the next node to process, loop
    node = findLowestCostNode(costs);
  }

  return lowestCostNode; 
}

// * test cases !!
console.log(costs, parents);
