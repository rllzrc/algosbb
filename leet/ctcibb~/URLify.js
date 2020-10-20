// ** ctci  -- Daily Reps! 
// ** --> { URLify !!! }

// T A S K !!
// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. 

// Hint # 1: count number of spaces
// >> count # of spaces: need two extra characters for each space ('' vs '%20') >> double the count, then walk backwards from the string while editing it >> whenever you see a space, replace with '%20', if no space copy original character.
// Hint # 2: modify strings is easiest by going from the end to the beginning
// >> common approach: edit the string from end working backwards as we have an extra buffer at the end, allows us to change characters without worrying about overwriting. 


// go through string one time to find out count of spaces as count
// calculate end index of new string: newEnd = length - 1 + count * 3 (since %20 consumes 3 places for each)
// iterate original string from end to begin, and perform shifts:
//     if position at i is not space, str[i + count * 3] = str[i]
//     if position at i is space, perform a shift of a loop 3 times for %20
//     count-- when one space has been shifted


// * first attempt: 
const replaceSpaces = s => {
  // edge case check:
  if(!s || s.length === 0) return;
  // create a variable to keep track of number of spaces
  s = s.split('');
  console.log(s);
  let spaces = 0;
  const url = '%20';
  // iterate through string to find out num of spaces
  for(let i = 0; i < s.length - 1; i += 1) {
    if(s[i] === ' ') {
      spaces += 1;
    }
  }
  // calculate end index of new string
  // %20 will need 3 places
  const newEnd = s.length - 1 + spaces * 3;
  // iterate through original string from end to beginning and perform shifts
  for(let i = s.length - 1; i >= 0; i -= 1) {
    // check if position at i is not a space
    if(s[i] !== ' ') {
      s[newEnd] = s[i];
    } else {
      s.splice(newEnd, url); 
    }
  }
  return s;
};

// * test cases!
console.log(replaceSpaces('Mr John Smith')); // -> 'Mr%20John%20Smith'

