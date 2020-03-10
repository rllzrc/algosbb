// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// input: an array of objects
// output: strings, last two separated by &

const list = arr => {
  // create a variable to store new output string
  let output = '';

  // * check to see if arr does not exist, not an arr, or is empty --> return output;
  if(!Array.isArray(arr) || !arr.length) {
    return output;
  }

  // * iterate through array of objects first
  for(let i = 0; i < arr.length; i += 1) {
    //console.log(`these are my objects: ${arr[i].name}`);
    if(arr.length === 1) {
      return output += arr[i].name;
      //console.log(`only one element: ${output}`);
    } else if(arr.length === 2) {
      return output += arr[i].name + ' & ' + arr[i+1].name;
    } else if(arr.length >= 3) {
      return output += `${arr[i].name}, ${arr[i+1].name}, & ${arr[i+2].name}`;
    }
  }
}

// test cases!

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// // returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// // returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]));
// returns 'Bart'

console.log(list([]));
// returns ''