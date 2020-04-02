// * Array Flattener
// Define a function, arrayFlattener, that accepts a two-dimensional array as an argument.

// arrayFlattener should return a new, one-dimensional array.

// * easy approach using arr.flat() method

const arrayFlattener1 = arr => {
  let result;
  return result = arr.flat();
}

// * brute force approach
const arrayFlattener = arr => {

  let result = [];
  
  for(let i = 0; i < arr.length; i += 1) {
    if(Array.isArray(arr[i])) {
      result = result.concat(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}



// * test cases!

console.log(arrayFlattener([1,[2, 3], 4])); // => [1, 2, 3, 4]