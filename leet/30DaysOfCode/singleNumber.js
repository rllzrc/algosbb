// * { DAY 1 } : SINGLE NUMBER CHALLENGE !
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


// * using filter and indexOf & lastIndexOf method
const singleNumber1 = arr => {

  const result = arr.filter(function(el) {
    return arr.indexOf(el) === arr.lastIndexOf(el);
  }); 

  return result.pop();
}

// * brute force attempt with helper function!
const singleNumber = arr => {
  
  const countInArr = (arr, item) => {
    
    let count = 0;
    for(let i = 0; i < arr.length; i += 1) {
      if(arr[i] === item) {
        count++;
      }
    }
    return count;
  }

  for(let i = 0; i < arr.length; i += 1) {
    if(countInArr(arr, arr[i]) === 1) {
      return arr[i];
    }
  }

}
// * test cases!
console.log(singleNumber([2,2,1])); // --> 1
console.log(singleNumber([4,1,2,1,2])) // --> 4