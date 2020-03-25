// create array method map from sratuch

const addTwo = (el) => {
  return result = el + 2;
}

const addS = (str) => {
  return str + 's';
}

const map = (arr, cb) => {
  // * create a new var to store result in
  let output = [];
  // loop through original arr
  for(let i = 0; i < arr.length; i +=1) {
    // * invoke original cb on each element
      // then push each value into output
    output.push(cb(arr[i]));
  }
  return output;
}



// * test cases!
console.log(map([1,2,3], addTwo)); 
console.log(map(['pizza', 'at', 'screamer', 'yum'], addS ));