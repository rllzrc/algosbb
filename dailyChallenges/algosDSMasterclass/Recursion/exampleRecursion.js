// * Put Your Reps In!
// * { Example Recursion Problems! }

const countDown = num => {
  // base case 
  if(num <= 0) {
    console.log('All set!');
    return;
  }
  console.log(num);
  num -= 1;
  countDown(num);
}

const sumRange = num => {
  // base case
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}

// * write a factorial iteratively
// 4! = 4 * 3 * 2 * 1
const factorial = num => {
  let total = 1;
  for(let i = num; i > 1; i -= 1) {
    total *= i;
  }
  return total;
}

// * recurisve factorial ~
const factorial2 = num => {
  // base case
  if(num === 1) return 1;
  return num * factorial(num - 1);
};

// * helper method recursion pattern
const outer = input => {
  let outerScopedVar = [];
  function helper(helperInput) {
    // modify the outerScopedVar
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVar;
}

// a more concrete example:
const collectOddValues = arr => {
  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// using only pure recursion:
const collectOddValuesPure = arr => {
  let newArr = [];
  if(arr.length === 0) return newArr;
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
  return newArr;
}