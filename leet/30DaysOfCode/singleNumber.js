// * { DAY 1 } : SINGLE NUMBER CHALLENGE !
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


// * using filter and indexOf & lastIndexOf method
const singleNumber = arr => {

  const result = arr.filter(function(el) {
    return arr.indexOf(el) === arr.lastIndexOf(el);
  }); 

  return result.pop();
}

// * test cases!
console.log(singleNumber([2,2,1])); // --> 1
console.log(singleNumber([4,1,2,1,2])) // --> 4