// Print the integer sum of the elements in the array.

const aVeryBigSum = arr => {

  let output = 0;

  for(let i = 0; i < arr.length; i += 1) {
    output += arr[i];
  }

  return output;
}

// * test cases!

console.log(aVeryBigSum([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ])); // -> 5000000015