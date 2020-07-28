// * Put Your Reps In!
// * { Frequency Counter Pattern }

// T A S K 1
// Check if two arrays have the same values when squared

// * naive/brute force approach:
// * runtime = quadratic O(N^2)
const same1 = (arr1, arr2) => {
  // quick edge case / short circuit check
  if(arr1.length !== arr2.length) {
    return false;
  }

  // loop through both arrays
  for(let i = 0; i < arr1.length; i += 1) {
    let index = arr2.indexOf(arr1[i] ** 2);
      if(index === - 1) {
        // meaning it is not found in the second array
        return false;
      }
    arr2.splice(index, 1);
  }
  return true;
}

// * test case!
console.log(same1([1,2,3,2], [9,1,4,4])); // -> true

// * second approach: refactored with frequency counter maps
const same2 = (arr1, arr2) => {
  // quick short circuit check:
  if(arr1.length !== arr2.length) {
    return false;
  }

  // create variables to store frequency counters:
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  // map out key/value pairs
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // iterate through each frequency map counter
  for(let key in frequencyCounter1) {
    // is element squared found in frequency counter2?
    // if not, return false
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // do the values correspond? 
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// * test case!
console.log(same2([1,2,3,2], [9,1,4,4])); // -> true

// T A S K 2 !! ~
// * { A N A G R A M S !!! }
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.

// * first attempt:
const validAnagram1 = (str1, str2) => {
  // quick short circuit check
  if(str1 && str2 === '') return true;
  if(str1.length !== str2.length) return false;
  // create a frequency map to store number of character occurrences
  const charMap1 = {};
  const charMap2 = {};
  // map out key/val pairs
  for(let char in str1) {
    charMap1[str1[char]] = (charMap1[str1[char]]|| 0) + 1;
  }
  for(let char in str2) {
    charMap2[str2[char]] = (charMap2[str2[char]] || 0) + 1;
  }

  console.log(charMap1);
  console.log(charMap2);
  // iterate through frequency map 
  for(let key in charMap1) {
    // if key is not found in other map, return false
    // console.log(charMap1[key])
    // console.log(key)
    if(!(key in charMap2)) {
      return false;
    }
    // check if the values correspond
    if(charMap2[key] !== charMap1[key]) {
      return false;
    }
  }
  return true;
}

// * second attempt: clean version from above
const validAnagram = (str1, str2) => {
  // quick edge case checks
  if(str1.length !== str2.length) return false;
  if(str1 && str2 === '')  return true;

  // create a hash map object to store character frequencies
  const map = {};

  // add key/value pairs to map
  for(let i = 0; i < str1.length; i += 1) {
    // create a variable to keep track of letters
    let letter = str1[i];
    // if letter exists, increment it, otherwise set value to 1
    map[letter] ? map[letter] += 1 : map[letter] = 1;
  }

  // iterate through second string
  for(let i = 0; i < str1.length; i += 1) {
    // create a variable to store current letter
    let char = str2[i];
    // if can't find letter or letter is zero then we do not have an anagram
    if(!map[char]) {
      return false;
    } else {
      map[char] -= 1;
    }
  }
  return true;
}

// * test case!
console.log(validAnagram('aaz', 'zza')); // -> false
console.log(validAnagram('anagram', 'nagaram')); // -> true
console.log(validAnagram('awesome', 'awsom')); // -> false
console.log(validAnagram('rat', 'car')); // -> false