// Return an array of two integers denoting the respective comparison points earned by Alice and Bob.

const compareTriplets = (a, b) => {
  
  const output = [];
  let alice = 0;
  let bob = 0;
  
  for(let i = 0; i < a.length; i += 1) {
    if(a[i] > b[i]) {
      alice += 1;
    } else if(b[i] > a[i]) {
      bob += 1;
    }
  }
  output.push(alice, bob);
  return output;
}

// * test cases !!!

console.log(compareTriplets([5,6,7], [3,6,10])); // --> [1,1]
console.log(compareTriplets([17,28,30], [99,16,8])); // --> [2,1]