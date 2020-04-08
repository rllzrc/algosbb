// * Zoo Inventory
// Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.

// zooInventory should return a new, flat array. Each element in the new array should be a sentence about each of the animals in the zoo.

const zooInventory = arr => {
  // create a new array to hold the finished sentences
  let sentences = [];

  // loop through the entire zoo array
  for (let i = 0; i < arr.length; i++) {

    // store the current animal
    let animal = arr[i];

    // store the name of the current animal
    let name = arr[0];

    // store the species of the current animal
    let species = arr[1][0];

    // store the age of the current animal
    let age = arr[1][1];

    // use string interpolation and our well-named variables to contruct the sentence
    let sentence = `${name} the ${species} is ${age}.`

    // push the sentence into the sentences array
    sentences.push(sentence);
  }

  // return the sentences array after the for loop
  return sentences
}

const myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Peter', ['groundhog', 11]]
];

//console.log(myZoo[0]);

// * test cases !!

console.log(zooInventory(myZoo)); // ---> // ['King Kong the gorilla is 42.', 'Nemo the fish is 5.', 'Punxsutawney Phil the groundhog is 11.']


