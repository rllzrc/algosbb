// ** AE: S T R I N G S ~ Daily Reps Challenge  
// ** --> { Longest Palindromic Substring !!! }

// T A SK !!!

// Write a function that, given a string, returns its longest palindromic substring.

// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

// You can assume that there will only be one longest palindromic substring. 

// * --- Roadmap --- *
// input: string
// ouptut: string
// constraints: optimize
// edge cases: empty string, ignore spaces, more than two of the same character, even/odd chars

// * main squeeze: first attempt using double for loop
// if even: there must be two of every character
// if odd: there must be only one character
// use hash table to store letters
// if we see the same letter, delete
// check hash at the end: odd - 1 key left, even - no keys left
// skip spaces

// * time complexity: O(N^3)
// * space complexity: 

const longestPalindromicSubstring2 = s => {
  // edge case check
  if(!s || s.length === 0 || s === ' ') return;
  

}


// * main squeeze: second attempt utilizing pointers + the "mirror" strategy, expanding from the center
// loop through string => at each point you get a potential longest palindrome that is centered at the given letter && one that is centered IN BETWEEN given letter & previous letter
// pick the longest from these two, update currentLonges
// then slice the currentLonges out of the string 

// * time complexity: O(N^2) 
// * space complexity: O(N) still bc we have to use slice and store the final substring 

const longestPalindromicSubstring = string => {
  // define current longest pal substring
  // tuple of two values: starting index + ending index
  // initialized at 0 & 1 --> why?! the longest at the very least is the first letter since it technically is considered a palindrome en
  let currentLongest = [0, 1];
  // iterate through the string
  // can't expand to the left of the first letter since it will be out of bounds thus starting at 1
  for(let i = 1; i < string.length; i += 1) {
    // define odd to keep track of palindrome odd length --> centered to the letter we are at
    // for expansion: 
    // i - 1 = left index
    // i + 1 = right index
    const odd = getLongestPalindrome(string, i - 1, i + 1);
    // define even to keep track of palindrome at even length --> centered IN BETWEEN current letter and previous letter
    // i = starting right index (bc inbetween the two letters)
    // i - 1 = left
    const even = getLongestPalindrome(string, i - 1, i);
    // max of odd and even => take a look at both values, check which one is longer by taking the difference of the value at index 1 and index 0 
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    // update currentLongest
    currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
  }
  // return the sliced substring out of the currentLongest array 
  // slice's second value = exclusive thus the structure of line 90 in helper function 
  return string.slice(currentLongest[0], currentLongest[1]);
}

// * helper function to get longest palindrome from index values (during expansion)
function getLongestPalindrome(string, leftIndex, rightIndex) {
  // to check if we are wihtin bounds of the string
  while(leftIndex >= 0 && rightIndex < string.length) {
    if(string[leftIndex] !== string[rightIndex]) {
      // no need to expand further
      break;
    }
    // move the left index pointer one more to the left
    leftIndex -= 1;
    // move right index pointer one more to the right of it
    rightIndex += 1;
  }
  // either past the indeces of the string (left index is too far, so -1) or right index that is equal to the length of the string (too far to the right)
  // or left index is just not equal to the right 
  // * the current left index where we are at is one index too far to the left
  // * rightIndex - 1 but we have the final index + 1 for how the currentLongest array is structured 
  // return an array of the same format of the currentLongest array
  return [leftIndex + 1, rightIndex];
}


// * test cases
console.log(longestPalindromicSubstring('abaxyzzyxf')); // -> 'xyzzyx'

// ---- M O V E FOR LATER ----- 
// tournament debugging with sagey
// not working with {} since there is no default value to access property value with []
// no need to write 1 in program to make code more readable
const homeTeamWon = 1

const tournamentWinner = (competitions, results) => {
  // keep track of best team found
  let currentBestTeam = '';
  // create ds to keep track of scores
  // by default add current best team, it will be empty at first
  // keeps track of all of the teams and their scores
  const scores = { currentBestTeam : 0 };
  // loop over comps array
  // gives us access to the value (element) as well as its index in which it appears
  for(let i = 0; i < competitions.length; i += 1) {
    // start by finding the result of the specific competition at current index
    // this will tell us whether the home team or the away team won
    const result = results[i];
    // use destructuring from competition array to figure out which is home and which is the away team
    const [homeTeam, awayTeam] = competitions[i];
    // determine winning team -> this will set the winningTeam variable = to the homeTeam IF the result is homeTeamWon aka 1
    const winningTeam = result === homeTeamWon ? homeTeam : awayTeam;
    // use helper function to update score by passing in winning team, passing in 3 (the score we wanna update it with) and scores -> this updates the data structure defined above
    updateScores(winningTeam, 3, scores);
    // update currentBestTeam, change currentBest to be equal to the winning team based on the team that just won
    if(scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

// * helper function to update scores
// pass in teams, points to add or remove from the score, + scores data structure
function updateScores(team, points, scores) {
  // if the team does not exist in the data structure, then simply add it
  if(!(team in scores)) scores[team] = 0;
  // update its points value - the points passed in as a parameter
  scores[team] += points;
}