// * Put Your Reps In!
// * { Example Recursion Problems! }

const countDown = num => {
  // base case 
  if(num <= 0) {
    console.log('All set!');
    return;
  }
  console.log(num);
  num -= 1;
  countDown(num);
}

const sumRange = num => {
  // base case
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}