// ** AE: Strings Daily Reps Challenge  
// ** --> { caesar cipher encryptor !!! }

// T A SK !!!

// Given a non-empty string of lowercase letters and a non-negative integer representing a keym, write a function that returns a new string obtained by shifting every letter in the input string by k postions in the alphabet, where k is the key.

// Note that the letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.


const caesarCipherEncryptor = (str, key) => {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for(const letter of str) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join('');
}

const getNewLetter = (letter, key, alphabet) => {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26];
}

// * second solution using reduce:
function caesarCipherEncryptor(word, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetMap = {};
    for (let i = 0; i < alphabet.length; i += 1) {
        alphabetMap[alphabet[i]] = i;
    }
    return word.split('').reduce((cipheredWord, letter) => {
        let letterIndex = alphabetMap[letter];
        let newLetterIndex = (key + letterIndex) % alphabet.length;
        cipheredWord.push(alphabet[newLetterIndex]);
        return cipheredWord
    },[]).join('')
};

// * test cases!
console.log(caesarCipherEncryptor('xyz', 2)) ; // -> "zab"