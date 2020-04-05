// * Day 3 of 30 days of code challenge: Conditionals!

// task: given an interger, perform the following :
// if odd: print weird
// if n is EVEN and between 2 to 5: print not weird
// if even and between 6 to 20: print weird
// if even and greater than 20: print not weird

// input: n and integer
// output: a string

const weirdConditionals = num => {

  if(num % 2 !== 0) {
    console.log('Weird');
  } else if (num % 2 === 0 && num >= 2 && num <= 5) {
    console.log('Not Weird');
  } else if (num % 2 === 0 && num >= 6 && num <= 20) {
    console.log('Weird'); 
  } else if (num % 2 === 0 && num > 20) {
    console.log('Not Weird');
  } 
}

// * test cases!

console.log(weirdConditionals(3));
console.log(weirdConditionals(24));