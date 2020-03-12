// My Last Index Of
// Define a function, myLastIndexOf, that accepts up to three arguments:

// array
// searchValue
// startIdx (optional)
// myLastIndexOf should return the last index at which the searchValue appears in the array.

const myLastIndexOf = (arr, target, startIndex) => {
  // iterate through the arr and check if target is in it
  let indexCounter = -1;
  if(!startIndex) {
    for(let i = 0; i < arr.length; i += 1) {
      if(arr[i] === target) {
        indexCounter = i;
      }  
    }
  } else if(startIndex >= 0) {
    for(let i = startIndex; i >= 0; i -= 1) {
      if(arr[i] === target) {
        indexCounter = i;
      }
    }
  } 

  return indexCounter;

}

console.log(myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee')); // => 3)
console.log(myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica')); // => -1)
console.log(myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2)); // => 0)

// test suites!

describe('myLastIndexOf', () => {

  it('is a function', () => {
    expect(typeof myLastIndexOf).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = myLastIndexOf([1, 2, 3], 2);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the last index at which the searchValue appears in the array', () => {
    let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10);
    expect(returnedValue).toEqual(3);
  });

  it('returns -1 if the searchValue does not exist in the array', () => {
    let returnedValue = myLastIndexOf(['peanut', 'cashew', 'walnut'], 'lemon');
    expect(returnedValue).toEqual(-1);
  });

  it('returns the last index of the searchValue that is less than the startIdx', () => {
    let returnedValue = myLastIndexOf([0, 10, 20, 10, 0], 10, 2);
    expect(returnedValue).toEqual(1);
  });

});