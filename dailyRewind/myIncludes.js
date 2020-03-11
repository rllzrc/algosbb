// My Includes
// Define a function, myIncludes, that accepts an array and a searchValue.

// myIncludes should return true if the searchValue is an element in the array. Otherwise, myIncludes should return false.

// Do not use the built-in .includes array method during this problem. Feel free to use it on any future problem though! Note that strings have an .includes method, too.

const myIncludes = (arr, target) => {
  // input: arr and target element
  // output: boolean, true or false

  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === target) {
      return true;
    }
  }

  return false;
}

console.log(myIncludes([10, 20, 30], 20)); // => true
console.log(myIncludes(['apples', 'bananas', 'citrus'], 'pears')); // => false

// test suites!


describe('myIncludes', () => {

  it('is a function', () => {
    expect(typeof myIncludes).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = myIncludes([1, 2, 3], 3);
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if the searchValue is in the array', () => {
    let returnedValue = myIncludes(['ruby', 'go', 'javascript'], 'javascript');
    expect(returnedValue).toEqual(true);
  });

  it('returns false if the searchValue is not in the array', () => {
    let returnedValue = myIncludes(['fun', 'happy things', 'kittens'], 'sad things');
    expect(returnedValue).toEqual(false);
  });

  it('returns false if the searchValue is loosely equal to an element in the array', () => {
    let returnedValue = myIncludes([5, 10, 15], '10');
    expect(returnedValue).toEqual(false);
  });

});