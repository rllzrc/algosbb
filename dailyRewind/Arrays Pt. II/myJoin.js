// * My Join
// Define a function, myJoin, that accepts up to two arguments:
// array
// separator (string, optional)
// myJoin should return a string with all of the elements from the array joined togther. The separator should separate the joined elements:

// * iterative solution first pass
const myJoin = (arr, separator) => {
  // check if separator === undefined
  if(separator === undefined) {
    separator = ',';
  }
  // declare a new variable to store result string in 
  let result = '';
  // iterate through arr
  for(let i = 0; i < arr.length; i += 1) {
    if(i !== 0) {
      result += separator;
    }

    // check if the current element is undefined or null
    if(arr[i] !== undefined && arr[i] !== null) {
      result += arr[i];
    }
  }
  return result; 
}

// * test cases!
console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' ')); // => "let's make  a list"
console.log(myJoin(['a', 'b', 'c'], '+')); // => "a+b+c"

// If separator is undefined, use ',' as the default separator.

console.log(myJoin(['Peter', 'Paul', 'Mary'])); // => "Peter,Paul,Mary"

// If any elements in the array are undefined or null, they should be replaced with an empty string in the returned string.

console.log(myJoin(['hello', undefined, 'world'], '-')); // => "hello--world"