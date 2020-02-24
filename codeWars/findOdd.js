// * findOdd 
// gieven an array, find the integer that appears an odd num of times >> 
// there will always be one integer that appears an odd num of times
function findOdd (arr) {
  //happy coding!

  // create a new variable to store how many times an element has been found in the arr 
  //const cache = {};

  // create a counter variable
  // let counter = 0;

  // iterate through the arr
  // for(let i = 0; i < arr.length; i += 1) {
  //   // check if the current element is
  //   cache[arr[i]] = 0;
  //   //console.log('counter in the loop:', counter);

  //   console.log('curr element', arr[i]);
  //   console.log('cache key', cache[i]);
  //   // console.log('cache in the loop:', cache);
  //   // if(arr[i] !== cache){
  //   //   cache[arr[i]] += 1;
  //   // }
  // }
  
  
  let cache = arr.reduce(function(obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});
  console.log('this is cache obj:', cache);
  

  // for (var property in object) {
  //   if (object.hasOwnProperty(property)) {
  //     // Do things here
  //   }
  // }

  // for(let key in object) {
  //   if(object.hasOwnProperty(key))V{
      
  //   }
  // }

  const counterValues = Object.entries(cache);
  console.log('whoa', counterValues);
  //counterValues.sort((a, b) => a - b);
  
  // * attempt with forEach ...
  // counterValues.forEach((e, i) => {
  //   //console.log('e', e);
  //   //console.log('i', i);
  //   if(e[1] > e[1]){
  //     console.log('2nd element', e[1]);
  //     return e[1];
  //   }
  // });

  // create a variable to store result;
  let result;
  for(let i = 0; i < counterValues.length; i++){
    if(counterValues[i][1] % 2 !== 0) {
      result = counterValues[i].shift()
    }
    // if(counterValues[i] > counterValues[i + 1] || counterValues.length === 1){
    //   //console.log('get itt:', counterValues[i]);
    //   result = counterValues[i].shift();
    // }
  }

  //console.log('yesssss!!!!:', result);
  //console.log('yooo!:', counterValues)

  return result;
}

// test cases!
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5);
console.log(findOdd([10])); // 10);


// for(let prop in counterValues) {
    
//   console.log('this is val:', counterValues[prop]);
//   console.log('plus 1:', counterValues[prop + 1]);
//   if(counterValues[prop] > counterValues[prop + 1]) {
//     return counterValues[prop];
//   }
// }