// * Zoo Inventory
// Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.

// zooInventory should return a new, flat array. Each element in the new array should be a sentence about each of the animals in the zoo.

function zooInventory(zoo) {
  let sentences = [];

  for (let i = 0; i < zoo.length; i++) {
    sentences.push(`${zoo[i][0]} the ${zoo[i][1][0]} is ${zoo[i][1][1]}.`)
  }

  return sentences;
}

const myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Peter', ['groundhog', 11]]
];

//console.log(myZoo[0]);

// * test cases !!

console.log(zooInventory(myZoo)); // ---> // ['King Kong the gorilla is 42.', 'Nemo the fish is 5.', 'Punxsutawney Phil the groundhog is 11.']


