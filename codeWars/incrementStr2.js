// check to see if string contains a num at the end
// create a function to check if str has a num at the end

const incrementString = str => {

  const checkIfNum = str => {
    // loop through the string
    for(let i = 0; i <= 9; i ++) {
      //console.log('strIndexOf:', str.indexOf(i));
      //console.log('this is the str:', str);
      if(str.indexOf(i) !== -1) {
        console.log('found the number', i);
      }
    }
  }
  return checkIfNum(str);

}

// console.log('foobar000'.indexOf(0));  // true)
// console.log('foobar'.indexOf(0));  // true)
// console.log('foobar01'.indexOf(0));  // true)
// console.log('foobar01'.indexOf(1));  // true)
// // if it doesnt contain a number add 1 to it
//console.log('A Blue Whale'.indexOf('Blue'));
// console.log('Potatoes'.indexOf('o'));
// console.log('Tacocat'.indexOf('Tacocat'));
// console.log('bacon121'.indexOf('121'));




// if its an empty string passed, return 1

// if it does contain a num; increase the num


console.log(incrementString("foo00")); // "foobar001");
// console.log(incrementString("foo")) // "foo1"); // --> pass
// console.log(incrementString("foobar001")) // "foobar002"); // --> pass
// console.log(incrementString("foobar99")) // "foobar100");
// console.log(incrementString("foobar099")) //"foobar100");
// console.log(incrementString("")) // "1"));