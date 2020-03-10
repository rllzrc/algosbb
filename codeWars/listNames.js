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


// for(let i = 0; i < arr.length; i += 1) {
  //   //console.log(arr[i].name)
  //   if(arr.length === 1) {
  //     output.push(arr[i].name);
  //   } else if(arr.length === 2) {
  //     output.push(arr[i].name)
  //   } else if(arr.length >= 3) {
  //     output.push(arr[i].name);
  //   }
  // }

  // if(output.length === 2){
  //   return output = output.join(' & ');
  // } else if (output.length === 3){
  //   return output = output.join('', ' & ');
  // }
  
  // output = output.join();
  // return output;

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