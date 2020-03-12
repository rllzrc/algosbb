// My Last Index Of
// Define a function, myLastIndexOf, that accepts up to three arguments:

// array
// searchValue
// startIdx (optional)
// myLastIndexOf should return the last index at which the searchValue appears in the array.

const myLastIndexOf = (arr, target, startIndex) => {
  // iterate through the arr and check if target is in it
  let indexCounter = -1;
  if(startIndex === undefined) {
    for(let i = 0; i < arr.length; i += 1) {
      if(arr[i] === target) {
        indexCounter = i;
      } else {
        for(let i = startIndex; i <= arr[0]; i -= 1) {
          if(arr[i] === target) {
            indexCounter = i;
          }
        }
      }
    }
    return indexCounter;
  }

  // if(startIndex){
  //   for(let i = startIndex; i < arr[0]; i--) {
  //     if(arr[i] === target) {
  //       indexCounter = i;
  //     } else {
  //       indexCounter = 0;
  //     }
  //   }
  //   return indexCounter;
  // }
}

console.log(myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee')); // => 3)
console.log(myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica')); // => -1)
console.log(myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2)); // => 0)