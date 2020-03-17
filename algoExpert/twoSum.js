// write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. if any two nums in the input array sum up to the target, return those in a new array. if not, return an empty array.

// assume that there will be at most one pair of nums summing up to the target sum

function twoNumberSum(array, targetSum) {
    // Write your code here.
    // write a test case if array is empty, return empty array
    const output = [];
    if(!array) {
      return output;
    }

    // iterate through the array; checking the first element with i
    for(let i = 0; i < array.length; i += 1) {
      // loop again checking the first with the second element
      for(let k = 0; k < array.length; k += 1) {
        // check and see if i doesn't equal k, meaning its the next element
        if(i !== k) {
          if(array[i] + array[k] === targetSum) {
            return true;
          } else {
            return false;
          }
        }
      }
    }

    return true;
}

// solution 2:

// const twoSum2 = (arr, target) => {
//   for(let i = 0; i < arr.length; i += 1) {
//     for(let k = i + 1; k < arr.length; k += 1) {
//       if(arr[i] + arr[k] === target) return true;
//     }

//   }
//   return false;
// }


// function twoNumberSum(array, targetSum) {
	
// 	for (let i = 0; i < array.length; i++) {
// 		const firstNum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
// 			const secondNum = array[j];
//       if (firstNum + secondNum === targetSum) {
// 				return [firstNum, secondNum];
// 			}
//     }
		
//   }
// 	return [];

// }


console.log(twoNumberSum([4,6,1], 5)); // --> [1,4]
console.log(twoNumberSum([4,6], 10)); // --> [4,6]
console.log(twoNumberSum([1,3,5], 7)); // --> [];
  
  