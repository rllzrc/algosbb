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


// testing suite

describe('oddCouple', () => {

  it('is a function', () => {
    expect(typeof oddCouple).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = oddCouple([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array with the first two odd numbers from the input', () => {
    let returnedValue = oddCouple([3, 6, 9, 12, 15]);
    expect(returnedValue).toEqual([3, 9]);
  });

  it('returns an array with the only odd number if the input has only one odd number', () => {
    let returnedValue = oddCouple([14, 21, 28]);
    expect(returnedValue).toEqual([21]);
  });

  it('returns an empty array if the input has no odd numbers', () => {
    let returnedValue = oddCouple([4, 8, 12, 16]);
    expect(returnedValue).toEqual([]);
  });

});
