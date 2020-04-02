// * Plus Minus Challenge!

// Function Description

// Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

// plusMinus has the following parameter(s):

// Input: an array of integers
// Output Format
// You must print the following  lines:
// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.

const plusMinus = arr => {
  
  const length = arr.length;
  let positive = 0;
  let zero = 0;
  let negative = 0;

  // loop through the array and count how many nums are positive, negative, and zero
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === 0) {
      zero++;
    } else if(arr[i] > 0) {
      positive++;
    } else if(arr[i] < 0) {
      negative++
    }
  }

  // * make a helper func do this instead!
  // positive = positive / length;
  // positive = positive.toFixed(6);

  const decimalConversion = (num, length) => {
    let result = num / length;
    return result = result.toFixed(6);
  }

  let pos = decimalConversion(positive, length);
  let neg = decimalConversion(negative, length);
  let zeros = decimalConversion(zero, length);

  console.log(pos);
  console.log(neg);
  console.log(zeros);
}


// * test cases!

console.log(plusMinus([-4, 3, -9, 0, 4, 1])); // ---> 0.500000 0.333333 0.166667 3 lines