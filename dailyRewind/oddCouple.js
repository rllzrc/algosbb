// YOUR CODE BELOW

// input: an arr of nums
// output: a new arr with first two odd nums from the orig arr

// if fewer than two odd nums exist, return an empty arr or an arr with the only odd num

function oddCouple(arr) {

  let oddsArr = [];
  arr.forEach((el) => {
    //console.log(el)
    if(el % 2 !== 0) {
      oddsArr.push(el);
    }
  });

  if(oddsArr.length > 2) {
    oddsArr.splice(2);
  }


  return oddsArr;
  
}

console.log(oddCouple([1, 2, 3, 4, 5])); // => [1, 3]);
console.log(oddCouple([10, 15, 20])); // => [15]);
console.log(oddCouple([2, 4, 6, 8])); // => []);
