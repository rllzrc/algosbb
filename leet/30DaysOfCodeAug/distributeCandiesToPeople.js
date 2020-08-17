// ** Day 17 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Distribute Candies to People !!! }

// T A SK !!!

// We distribute some number of candies, to a row of n = num_people people in the following way:

// We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

// Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

// * first attempt: use DP
const distributeCandies = (candies, num_people) => {
  let output = new Array(num_people).fill(0);
  let level = 0;
  while(candies) {
    // fill out dp grid
    for(let i = 0; i < num_people; i += 1) {
      // create a variable to store num of candies
      let numCandies = i + 1 + num_people * level;
      // check if candies param is greater than current num of candies
      if(candies >= numCandies) {
        // reassign values
        output[i] += numCandies;
        candies -= numCandies;
      } else {
        output[i] += candies;
        candies = 0;
      }
    }
    level += 1;
  }
  return output; 
};

// * test cases!!
console.log(maxProfit(7, 4)); // -> [1,2,3,1]
console.log(maxProfit(10, 3)); // -> [5,2,3]