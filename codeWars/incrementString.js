// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

const incrementString = str => {
  // input: a string
  // output: new string with a number at the end

  // * create a new string var to iterate and add into as result for later

  let newStr = str.toLowerCase().split('');

  // create a counter variable to add numbers to the end of the array
  let counter = 0;
  // might need to set counter as the last element number so you can increase it by one correctly 

  // * since item is passed in as a string, numbers will be coerced to that type value. use regex to find it..?
  function hasNumbers(t) {
    let regex = /\d/g;
    return regex.test(t);
  } 

    // * with ES6, use destructuring and slice to obtain last item in the newStr arr
    const [lastItem] = newStr.slice(-1);
    //console.log('last element:', lastItem);


    // * call function to check if str has numbers
    hasNumbers(lastItem);

  // * loop through the string with .split() and convert to lowercase
  

    // if last item is not a number, add counter ++ aka 1,2,3...
    if(hasNumbers(lastItem) === true && lastItem !== '0' && lastItem !== '9') {
      counter = lastItem;
      counter ++;
      console.log('yay increase counter:', counter);
      console.log('last el in if:', lastItem)
      newStr.pop();
      let output = newStr.join('');
      console.log('newstring:', output);
      console.log(output + counter);
    } else if (hasNumbers(lastItem) === false) {
      counter ++;
      let output = newStr.join('');
      console.log(output + counter);
    }

    


  




}

// test cases!

console.log(incrementString("foobar000")) // "foobar001");
console.log(incrementString("foo")) // "foo1");
console.log(incrementString("foobar001")) // "foobar002");
console.log(incrementString("foobar99")) // "foobar100");
console.log(incrementString("foobar099")) //"foobar100");
console.log(incrementString("")) // "1");