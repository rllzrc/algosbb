// * Put Your Reps In!
// * { Recursion Problem Set 2! }

// *** T A S K # 1 !!! ~~
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// * first attempt: using built in methods
const reverse1 = str => {
  return str.split('').reverse().join('');
}

// * second attempt: iteratively
const reverse2 = str => {
  // quick edge case check
  if(!str || str.length === 0) return '';
  // split string into arr
  const strArr = str.split('');
  // create an output variable
  let output = '';
  // iterate through each char in str
  for(let i = strArr.length - 1; i >= 0; i -= 1) {
    output += str[i];
  }
  return output;
};


// * third attempt: recursively ~
const reverse = str => {
  // base case
  if(str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}


// * test cases!
console.log(reverse('awesome')); // -> 'emosewa'
console.log(reverse('fatcat')); // -> 'tactaf'

// -----

// skeleton frame for recursion with helper pattern: 
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