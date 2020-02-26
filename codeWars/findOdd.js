// * findOdd 
// gieven an array, find the integer that appears an odd num of times >> 
// there will always be one integer that appears an odd num of times
function findOdd (arr) {
  //happy coding!

  // create a new variable to store how many times an element has been found in the arr 
  const cache = {};

  // create a counter variable
  let counter = 0;

  // iterate through the arr
  for(let i = 0; i < arr.length; i += 1) {
    // check if the current element is
    cache[arr[i]] = counter += 1;
  }
  
  //console.log(cache);
  
  const counterValues = Object.entries(cache);
  console.log('whoa', counterValues);
  counterValues.sort((a, b) => a - b);
  console.log('yooo!:', counterValues)

  return counterValues.pop();
}

// test cases!
console.log([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]); // 5);
//console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5);
console.log(findOdd([10])); // 10);