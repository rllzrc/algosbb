const solution = c => {
  // initiate two pointer variables
  let x = 0;
  let y = Math.floor(Math.sqrt(c));

  // loop through while x <= y
  while(x <= y) {
    // create a new variable to store sum result in
    let sum = Math.pow(x,2) + Math.pow(y, 2);
    // check if sum === c, return true
    if(sum === c) {
      return true;
    } else {
      // check if sum is greater than input c
      if(sum > c) {
        // decrement y value
        y -= 1;
      } else {
        // increase x by 1
        x += 1;
      }
    }
  }  
  return false;
}


const solution = strings => {
  // initiate a new empty string 
  let longestStr = '';

  // edge case quick check if string passed is empty
  if(strings.length === 0) {
    return longestStr;
  }

  // create two variables to compare and one to keep track of index values 
  let compare = strings[0];
  let compareIndex = 0;

  // iterate through the characters of the compare variable  w for of loop
  for(let char of compare) {
    // loop through the length of the string
    for(let i = 1; i < strings.length; i += 1) {
      // create two varaibles for current word and current letter
      let currentWord = strings[i];
      let currentLetter = currentWord.charAt(compareIndex);

      // check if the character is not in the current letter or the index is larger than the length of current word
      if(char !== currentLetter || compareIndex > currentWord.length) {
        return longestStr;
      }
    }
    // increment index variable
    compareIndex += 1;
    // concat longestStr variable with current character
    longestStr += char;
  }
  return longestStr;
}

const solution = (denominations, amount) => {
  // quick edge case check if amount is not a truthy value
  if(!amount) return 0;
  // sort out the denominations 
  denominations.sort((a,b) => a-b);
  // create a new variable to store result in
  let result = [];
  result[0] = 0;

  // loop up until amount
  for(let i = 0; i <= amount; i += 1) {
    // loop through denominations array
    for(let k = 0; k < denominations.length; k += 1) {
      // check if current element on denom array is less than current i value, if so, reassign result using math.min
      if(denominations[k] <= i) {
        result[i] = Math.min(result[i], 1 + result[i - denominations[k]]);
      } else {
        break;
      }
    }
  }

  // ternary to return result either -1 or fewest number
  return denominations[amount] > amount ? -1 : dp[amount];
};