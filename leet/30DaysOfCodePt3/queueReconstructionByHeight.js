// ** Day 6 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Queue Reconstruction By Height ! }

// ~ also completed as part of Bagels Algo Group ~
// T A S K !!

// Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

// * first attempt:
const reconstructQueue = people => {
  let output = [];

  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);

  for(let i = 0; i < people.length; i += 1) {
    output.splice(people[i][1], 0, people[i]);
  }

  return output;
}

// * more verbose -> readability with comments 
const reconstructQueue2 = people => {
  // pick out the tallest group by sorting in descending order
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  // create a new subarry to pick out the tallest
  let temp = [];

  // loop through the array, creating the new temp arr
  for(let i = 0; i < people.length; i += 1) {
    // people[i][1] are the shortys!
    temp.push(people[i][1], people[i]);
    //console.log('subarr:', temp);
  }

  // create a new result output variable:
  let result = [];
  for(let i = 0; i < temp.length; i += 1) {
    result[i] = temp.get(i);
  }
  return result;
}

// * test cases!!
console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])); // [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]