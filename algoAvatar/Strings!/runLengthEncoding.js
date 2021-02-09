// ** AE: S T R I N G S ~ REP Challenges! 
// ** --> { Run Length Encoding !!! }

// T A SK !!!

// Write a function that takes in a non-empty string and returns its run-length encoding.

// Uhh.. whut? Run-length encoding from wiki: a form of lossless data compression in which runs of data are stored as single data value and count, rather than as the original run. For this problem, a run data is any sequence of consecutive, identical characters. So the run "AAA" would be a run-length code of "3A".

// Of course we like to make things more complicated when it comes to solving algos sooo.... the input can contain all sorts of special characters, including numbers. Since encoded data must be decodable, this means that we can't naively run-length-encode long runs. Thus, long runs (runs of 10 characters or more) should be encoded in a S P L I T fashion, such as "AAAAAAAAAAAA" => "9A3A"


// * --- Roadmap --- *
// input: a non empty string of chacracters (including numbers)
// output: string in run-length encoding format
// constraints: optimize -> special characters like spaces, dots, numbers, etc. need to make sure whenever a run is greater than length 9, split it up (why? bc of these special characters, we need to differentiate the runs)
// edge cases: make sure we handle the last run in our string explicitly -> automatically add run counter + last element of string to chars []
// convert characters list into a string then return it out 

// * main squeeze:
// create a list data structure to keep track of characters, why a list instead of a string? Bc strings are immutable so you're basically looping and rebuilding the string over and over again -> O(N) operation initially then per concatenation -> O(N^2) yikes...-__- (multiple O(N) operations still equate to an O(N) time)
// create a variable to keep track of length of runs, start it at 1 => why? -> its a non-empty string, at minimum we will have 1 character in the string. The min run will always be 1.
// iterate through input, starting at 2
// compare current char to prev char => if the same, increment length, if not, take whatever current run length and prev character + add to chars list []
// if run length reaches 9 -> max reached, add run to chars [] + reset length counter
// convert chars [] into a string


// * time complexity: O(N) -> constant time operations within for loop 
// * space complexity: O(N) -> list data structure adding pairs (characters + count run length) -> 2N space N = length of input string, remove constant so just O(N)

// * first attempt: 
const runLengthEncoding = string => {
  // define empty list / array to store characters
  const encodedCharacters = [];
  // keep track of run length
  const currentRunLength = 1;
  // iterate through string
  for(let i = 2; i < string.length - 1; i += 1) {
    // create variables to store current and previous for ease later
    let current = string[i];
    let previous = string[i - 1];
    // check if they are not equal or if length is at 9, add character + run length to array
    if(current !== previous || currentRunLength === 9) {
      // toString since length is a number, must convert to string 
      encodedCharacters.push(currentRunLength.toString());
      // no need to convert since its a string value, why previous? bc it would have been the end of the run we previously found
      encodedCharacters.push(previous);
      // reset length
      // at the end of the loop we will add 1 thus reset to 0
      currentRunLength = 0;
    }
    // reset run length if we find another run or it has already been added previously
    currentRunLength += 1;
  }
  // handle the last run 
  encodedCharacters.push(currentRunLength.toString());
  encodedCharacters.push(string[string.length -1]);
  // convert array/list to string
  return ''.join(encodedCharacters);
};

// test cases
console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD')) // -> '9A4A2B4C2D'