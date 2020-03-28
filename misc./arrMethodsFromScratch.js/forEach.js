// * create forEach method from scratch

// add two to each element
const addTwo = num => num + 2;

const addZ = str => str + 'z'

const forEach = (arr, cb) => {

  // loop through array
  for(let i = 0; i < arr.length; i +=1) {
    // invoke callback and apply it to each element in the array
    arr[i] = cb(arr[i]);
  }
  // no return value; for each will just update each el according to callback operation
}

const arr1 = [1,2,3];
const arr2 = ['oreo', 'cheese', 'dip']
console.log(forEach(arr1, addTwo)); // --> should return undefined
console.log(forEach(arr2, addZ));
console.log('updated array:', arr1); // --> [3,4,5]
console.log('updated array:', arr2); // --> [3,4,5]