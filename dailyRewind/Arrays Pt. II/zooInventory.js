// * Zoo Inventory
// Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.

// zooInventory should return a new, flat array. Each element in the new array should be a sentence about each of the animals in the zoo.

const zooInventory = arr => {
  let output = [];

  let animal = [];
  let name = [];
  let age = [];

  let flat = arr.flat(1);
  //console.log('flat:', flat)

  for(let i = 0; i < flat.length; i += 1) {
    //console.log('elements:', flat[i]);
    name.push(flat[i]);
    if(Array.isArray(flat[i])) {
      //console.log('hi there!');
      animal.push(flat[i]);
    }
  }

  console.log('!!!!!!!', name);
  console.log('****', animal);
}

const myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Peter', ['groundhog', 11]]
];

//console.log(myZoo[0]);

// * test cases !!

console.log(zooInventory(myZoo)); // ---> // ['King Kong the gorilla is 42.', 'Nemo the fish is 5.', 'Punxsutawney Phil the groundhog is 11.']


