// My Unshift
// Write a function myUnshift that takes an array and a value of any type as arguments.

// myUnshift should return a new array, with the given value as the first element in the new array.

// Do not use the built-in .shift method for this problem!

// * input: an array and a target val of any type
// * output: return a new array with give target as first element of the array
// * CANNOT use built in .shift method

const myUnshift = (arr, target) => {
  
  // create a new const to store result arr in, initialize to an empty array
  const resultArr = [];
  resultArr.push(target);
  for(let i = 0; i < arr.length; i += 1) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}

// second solution:

const myUnshift2 = (arr, target) => {
  // create new const arr with the target as the first element
  const resultArr = [target];

  // loop through original arr
  arr.forEach((e) => {
    resultArr.push(e);
  });

  return resultArr;
}

console.log(myUnshift([1, 2, 3], 0)); // => [0, 1, 2, 3]
console.log(myUnshift2([5,6,7], 4)); // => [4,5,6,7]
console.log(myUnshift(['apples', 'oranges', 'pomegranates'], 'blueberries'));
// test suites!

// describe('myUnshift', () => {

//   it('is a function', () => {
//     expect(typeof myUnshift).toEqual('function');
//   });

//   it('returns an array', () => {
//     let returnedValue = myUnshift([1, 2, 3], 0);
//     expect(Array.isArray(returnedValue)).toEqual(true);
//   });

//   it('returns a new array with the value as the first index', () => {
//     let returnedValue = myUnshift(['bears', 'cows', 'ducks'], 'antelopes');
//     expect(returnedValue).toEqual(['antelopes', 'bears', 'cows', 'ducks']);
//   });

// });
