// * Day 6 of 30 Days of Code Challenge @ HackerRank
// * Let's review strings!!!

// Task: Print the even and odd indices of each string with a space separated in between

// input: 2 , Hacker Rank
// output: Hce ackr Rn ak two separate lines

// * brute force approach:
const processStrings = (...strs) => {
  console.log(strs);
  
  strs = strs.join(' ');
  console.log(strs);
  // create a variable to store even and odd indices elements in
  let even = '';
  let odd = '';
  // loop through the str 
  for(let i = 0; i < strs.length; i += 1) {
    console.log(strs[i]);
    if(i % 2 === 0) {
      even += strs[i];
    } else {
      odd += strs[i];
    }
  }
  console.log(even, odd);
}

// * test cases!
console.log(processStrings('Hacker', 'Rank')); // --> Hce akr Rn ak 