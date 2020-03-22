// Even and Odd
// Define a function, evenAndOdd, that accepts an array.

// evenAndOdd should return a new array. The first element in the new array should be an array with all of the even numbers from the original array. The second element in the new array should be an array with all of the odd numbers from the original array.

// input: an array
// output: a new array first element in new array should be an array of all the even numsk second element is all the odd elements

const evenAndOdd1 = arr => {
  // create a new const arr for even nums
  const resultArr = [[], []];
  // loop through arr 
  arr.forEach(e => {
    if(e % 2 === 0) {
      resultArr[0].push(e);
      //resultArr[0].sort((a,b) => a-b);
      //console.log(resultArr);
    } else {
      resultArr[1].push(e);

      // * if inputs are not in numerical order, use sort!

      //resultArr[1].sort((a,b) => a-b);
      //console.log('odds:', resultArr);
    }
  });

  return resultArr;
}

const evenAndOdd = arr => {
  // input: arr of nums
  // output: arr of arrs separating even from nums

  // create a new result var
  sortedArr = arr.sort((a, b) => a-b);
  let resultArr = [];
  const evens = [];
  const odds = [];
  arr.forEach(e => {
    if(e % 2 === 0) {
      evens.push(e);
    } else {
      odds.push(e);
    }
  })
  //console.log('e:', evens);
  //console.log('o:', odds);
  resultArr = [evens, odds]
  return resultArr; 
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6])); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
console.log(evenAndOdd([5,6,4,2,1,9])); // => [[ 2, 4, 6  ], [ 1, 5, 9 ]]


// test suites!

// describe('evenAndOdd', () => {

//   it('is a function', () => {
//     expect(typeof evenAndOdd).toEqual('function');
//   });

//   it('returns an array', () => {
//     let returnedValue = evenAndOdd([1, 2, 3]);
//     expect(Array.isArray(returnedValue)).toEqual(true);
//   });

//   it('returns an array where the first element has all the even numbers from the original array', () => {
//     let returnedValue = evenAndOdd([10, 15, 20, 25, 30]);
//     expect(returnedValue[0]).toEqual([10, 20, 30]);
//   });

//   it('returns an array where the second element has all the odd numbers from the original array', () => {
//     let returnedValue = evenAndOdd([7, 14, 21, 28, 35]);
//     expect(returnedValue[1]).toEqual([7, 21, 35]);
//   });

// });
