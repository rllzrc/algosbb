// My Reverse
// Define a function myReverse that accepts an array.

// myReverse should return a new array with the elements in reverse order.

// myReverse([1, 2, 3]);    // => [3, 2, 1]
// Do not use the built-in .reverse method for this problem. You can use it on all future problems though!

// * input: an array of unordered nums or letters [1,2,3]
// * output: a new array with elements in reverse order [3,2,1]

const myReverse = arr => {
  // create a new variable to store new array in
  const output = [];
  //console.log('length:', arr.length);
  for (let i = arr.length; i > 0; i--){
   // console.log('dis i:', i);
    //console.log('el:', arr.length);
    output.push(arr.pop());
    //console.log('out:', output);
  }

  // so basically what is happening is your index and length are starting on the end, the same number
  // if there are 3 items in the arr, the length is 3, so on if 4,5, etc..
  // and at each iterartion, you push the current element, which is say 3 from above example, and then you pop or remove it from the original argument arr that was passed
  // so you're always adding it from the end into the new arr in order
  // YAY

  return output;
}

console.log(myReverse([1, 2, 3]));    // => [3, 2, 1])
console.log(myReverse(['pineapples', 'mangoes', 'apples']));
console.log(myReverse([5,4,6]));


// describe('myReverse', () => {

//   it('is a function', () => {
//     expect(typeof myReverse).toEqual('function');
//   });

//   it('returns an array', () => {
//     let returnedValue = myReverse([1, 1]);
//     expect(Array.isArray(returnedValue)).toEqual(true);
//   });

//   it('returns an array with reversed elements', () => {
//     let returnedValue = myReverse(['first', 'second', 'third']);
//     expect(returnedValue).toEqual(['third', 'second', 'first']);
//   });

// });
