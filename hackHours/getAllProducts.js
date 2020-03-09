const getAllProducts = array => {
  // keep track of num of zeros in array and set our product accumulator to 1
  let zeroIndex, zeroCount = 0, prod = 1;
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // if the element is a 0, add to zero count and keep track of the index
    if (array[i] === 0) {
      zeroCount += 1;
      zeroIndex = i;
      // if there is more than 1 zero , entire array is going to be zeros
      if (zeroCount === 2) break;
    }
    // otherwise, if not zero, multiply the element of the array by our "product" - starts at 1
    // will eventually equal the entire value of array
    else {
      prod *= array[i];
    }
  }
  // if no zeros - take each element of array and divide the product of entire array by that element
  if (zeroCount === 0) {
    return array.map(ele => prod / ele);
  }
  // if one zero, one element of array will not be zero - the element that was 0 in original array
  // fill the array with zeros and overwrite the zeroIndex with the product of the other elements in array
  else if (zeroCount === 1) {
    const result = new Array(array.length).fill(0);
    result[zeroIndex] = prod;
    return result;
  }
  // if more than 1 zero, everything in array will be zeros, so fill and return
  else {
    return new Array(array.length).fill(0);
  }
};
// test cases
console.log(getAllProducts([1, 7, 3, 4])) //-> [84, 12, 28, 21]
console.log(getAllProducts([2, 5, 3])) //-> [15, 6, 10]
console.log(getAllProducts([0, 1, 2, 3])) //-> [6, 0, 0, 0]
console.log(getAllProducts([0, 0, 2, 3])) //-> [0, 0, 0, 0]