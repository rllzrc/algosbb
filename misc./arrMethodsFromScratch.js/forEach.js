// * create forEach method from scratch

// add two to each element
const addTwo = num => num + 2;

const forEach = (arr, cb) => {

  // loop through array
  for(let i = 0; i < arr.length; i +=1) {
    // invoke callback and apply it to each element in the array
    arr[i] = cb(arr[i]);
  }
  // no return value; for each will just update each el according to callback operation
}

const arr1 = [1,2,3]
console.log(forEach(arr1, addTwo)); // --> should return undefined
console.log('updated array:', arr1); // --> [3,4,5]