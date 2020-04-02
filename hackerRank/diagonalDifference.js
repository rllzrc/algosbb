// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.


// * brute force approach:

const diagonalDifference = arr => {

  let x = [];
  let y = []; 

  for(let i = 0; i < arr.length; i += 1) {
    x.push(arr[i][i]);
    y.push(arr[i][arr.length-1-i])
  }

  const add = (arr, el) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
    return sum;
  }

  sum1 = add(x);
  sum2 = add(y);

  const result = Math.abs(sum1 - sum2);
  return result;

}


// * practice with matrix and grabbing diagonals ~

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]

const letterMatrix = [
  ["A","B","C"],
  ["D","E","F"],
  ["G","H","I"]
]

// prints all nums in multidimensional arr
const printNums = arr => {
  for(let i = 0; i < arr.length; i++){
    for(let k = 0; k < arr.length; k++) {
      console.log(arr[i][k]);
    }
  }
}

// same thing as above but backwards 
const backwardsCount = nums => {
  for(let i = nums; i >= 0; i -= 1) {
    console.log(i)
  }
}

// count all nums up until num
const logOutNums = nums => {
  for(let i = 0; i < nums; i += 1) {
    console.log(i, i+1);
  }
}

// find diagonal values in matrix / nested array
const diagz = arr => {
  for(let i = 0; i < arr.length; i += 1) {
    console.log(arr[i][i], i);
    console.log("***", arr[i][arr.length-1-i]);
  }
}


// * test practice run here:

console.log(diagz(letterMatrix));
//console.log(logOutNums(5));
//console.log(backwardsCount(5));
//console.log(printNums(matrix));
//console.log(matrix[2][0]);

// * test cases!!!

console.log(diagonalDifference(matrix)); // --> 2