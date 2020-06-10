// ** Day 6 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Queue Reconstruction By Height ! }

// ~ also completed as part of Bagels Algo Group ~
// T A S K !!

// Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

// * first attempt:
const reconstructQueue1 = people => {
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

  console.log(people);
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

// when the height is the same, sort by k value
// ^^ k value and index values are the same
// sort people on basis of height
// k = taller or equal to persons height
// sort by ascending order
// ------
// * third attempt: 
// sort according to height in descending order
// if height is the same => sort by ascending order according to k value
// put element in the index accoring to its k value
// if the k values and index should be the same, smaller height will not affect the height of bigger num
const reconstructQueue = people => {
  // create a variable to hold on to sorted arr value in descending order

  // sorted people on basis of height and index value
  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
  console.log(people);

  // create a new output arr to store final result
  const output = [];

  // iterate the people arr, insert p on the basis of its k value
  for(let i = 0; i < people.length; i += 1) {
    let height = people[i][0];
    let current = people[i];
    let next = people[i + 1];
    let k = people[i][1];
    console.log('current:', current);
    console.log('next:', next);
    console.log('height:', height);
    console.log(k);
    // check if height is the same, sort by ascending order according to second value

    // splice changes contents of array by removing / replacing existing elements or adding it in place
    // splice starting from the current element's Kth value
    // second parameter is the deleteCount, this case none since we want to keep all subarrs
    // third parameter is items to add to the array, so pass it the current variable and it will keep looping until the end of the people array
    output.splice(k, 0, current);
    
  }
  console.log('wtf:', output);
}
// * test cases!!
console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])); // [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]