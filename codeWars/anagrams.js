// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//  * compare two words by their letters
// just need to see matching letters, letter order does NOT matter
// * take each word parameter passed and alphabetize it, compare one against the other --> if they match, we got it!

// case insensitive! 

// * declare words array

const words = ['toffee', 'map', 'Buckethead', 'WooT', 'bumble' ];

// * create a helper function that takes in a word and alphabetizes a string

const alphabetize = str => { 
  // * check to see if parameter was passed
  // if nothing exit the function aka error check 
  if(!str) {
    return;
  }

  // * split str passed into an arr
  // * convert to arr to use sort method
  // * join to revert back to str value 
  str = str.split('');
  str = str.sort();
  str = str.join('');

  return str;

}


// * create MAIN funciton 
// takes in an array of words and spits out an object
// where each key will hold an arr value that are anagrams

const anagramGenerator = arr => {
  // declare object var to store values in
  const anagrams = {};

  // loop through the words/str arr
  arr.forEach((str) => {

    // invoke alphabetize function and pass current element into it 
    // * store result val of alphabetize function into this variable 
    const sorted = alphabetize(str);

    // check if anagrams object contains sorted word

    // * checking to see if a key exists in our anagrams object, if it does, run the code inside the if block, if not run statement below 
    if(anagrams[sorted]) {

      // push additional anagrams into the arr
      return anagrams[sorted].push(str);
    }

    // * this creates a key on the anagrams object with the sorted var
    // then stores an array with the current word we are iterating over
    anagrams[sorted] = [str];
  });

  return anagrams;

}

// * store result (anagrams obj) in a variable called groupedAnagrams
const groupedAnagrams = anagramGenerator(words);

for(let sorted in anagramGenerator) {
  console.log(anagramGenerator[sorted].toString());
}

console.log(anagramGenerator(words));