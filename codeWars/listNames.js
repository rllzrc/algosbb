// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// input: an array of objects
// output: strings, last two separated by &


const list = names => {
  
  // create a new empty string variable 
  let newStr = '';

  // check if names doesn't exist
  if(names === undefined) {
    return newStr;
  }

  // loop through names arr, each index val or el is an object
  for( let i = 0; i < names.length; i += 1) {
    if(i >= names.length-2) {
      newStr += names[i].name + ' & ';
    } else {
      newStr += names[i].name + ', ';
    }
  }
  
  return newStr.slice(0, newStr.length-2);
}

// * using reduce!
// function list(names){
//   return names.reduce(function(prev, current, index, array){
//     if (index === 0){
//       return current.name;
//     }
//     else if (index === array.length - 1){
//       return prev + ' & ' + current.name;
//     } 
//     else {
//       return prev + ', ' + current.name;
//     }
//   }, '');
// }

// test cases!

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}  ]));
// // returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// // returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]));
// returns 'Bart'

console.log(list([]));
// returns ''