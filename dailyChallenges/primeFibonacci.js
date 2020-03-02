
// given a number, n, print all the numbers that are in the first n Fibonacci numbers.

const primeFibonacci = num => {
  // console.log(number);
  
  // create a new arr variable
  // arr already has 1,1 since we know those are the first prime nums in fib
  let arr = [1,1];
  // loop through up until num
  for (let i = 2; i < number; i += 1) {
    arr.push(arr[arr.length-1] + array[array.length-2]);
  }
  //console.log(array);
  return arr.filter(e => isPromise(e));
}

const isPrime = num => {
  if(num < 2) {
    return false;
  } 
  for (let i = 0; i < num; i +=1) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}


