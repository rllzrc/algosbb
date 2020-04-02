// * Draw Stairs! aka Staircases ~

// Function Description

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer

const drawStairs = n => {

  // loop through the input number passed in
  // every line is going to be n characters long
  for(let i = 0; i < n; i += 1) {
    // each line is composed of only stars and spaces
    // in each line, hashtag + spaces = n
    const hashtag = i + 1;
    const spaces = n - hashtag;
    // log n lines
    // the first line should have n - 1 spaces and 1 star
    console.log(' '.repeat(spaces) + '#'.repeat(hashtag));
  }
}

// * test cases !!
console.log(drawStairs(6));
console.log(drawStairs(8));


