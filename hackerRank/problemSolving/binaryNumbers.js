// * DAY 10 of 30 Days of Code Challenge! ---> Binary Numbers!

// Given a base integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation.
// input: A single integer
// output: Print a single base- integer denoting the maximum number of consecutive 's in the binary representation of .

const binaryNumbers = nums => {
  //let nums = parseInt(readLine());
  let arr = [];

  while(nums !== 0) {
    if(nums % 2 === 0) {
      arr.push(0);
    } else if (nums % 2 === 1) {
      arr.push(1);
      nums = Math.floor(nums/2);
    }
  }

  let max = 0;
  let current = 0;

  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === 1) {
      current += 1;
    } else if(arr[i] === 0) {
      if (current > max) {
        max = current;
        current = 0;
      }
    }
  }

  if(current > max) {
    max = current;
  }

  console.log(max);
}


// * test cases!

console.log(binaryNumbers(5)); //--> 1
console.log(binaryNumbers(13)); //--> 2
// The binary representation of 5 is 101, so the maximum number of consecutive 1's is 1.
