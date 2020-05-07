// * Chapter 6 Practice --> Breadth First Search

// helper function to check if a person is a mango seller
// checks if a person's name ends with an M then they ya go a mango person!
const mangoPerson = name => name[name.length-1] === 'm';

// * implementing the graph!
// order doesn't matter here since hash tables don't have a specific order in place
const graph = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const breadthFirstSearch = name => {
  // create a queue and add neighbords to the seach queue --> graph[you] will give a list of neighbors alice, bob, and claire
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);

  // create a variable to keep track of which names we've searched through before
  const alreadySearched = [];

  //loop through while the queue isn't empty:
  while(searchQueue.length) {
    // grab the first person off the queue
    const person = searchQueue.shift();
    // proceed w search only if you haven't seen this name before
    if(alreadySearched.indexOf(person) === -1) {
      // this means it wasn't found in the serached array so proceed!
      // run helper function to check if the name ends with an M if so we got it!
      if(mangoPerson(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      }

      // the original person in the loop wasn't a mango person, so add all their neighbors into the queue 
      searchQueue = searchQueue.concat(graph[person]);

      // push the current item that was just processed into the searched array so we can track it for later
      alreadySearched.push(person);

    }
  }
  // ;[ no mango seller found
  return false;
}
