// * Bagels Group LeetCode Challenge --> Queue Reconstruction by Height


// T A S K !!

// Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

// * greedy solution:
const reconstructQueue = people => {
  people.sort((a, b) =>  b[0] - a[0] || a[1] - b[1]);
  // people will be in descending order after the sort
  //console.log('line:', people);
  let result = [];
  // result will splice or remove/add elements starting at the first index and only that element up until the last element
  people.forEach(el => result.splice(el[1], 0 , el));
  return result;
}



// * test cases!!
console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])); // -> [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]



