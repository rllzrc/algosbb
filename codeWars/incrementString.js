// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

const incrementString = str => {
  // input: a string
  // output: new string with a number at the end

  // * create a new string var to iterate and add into as result for later

  let newStr = str.toLowerCase().split('');

  // * create a counter variable to add numbers to the end of the array
  // might need to set counter as the last element number so you can increase it by one correctly 
  let counter = 0;

  // * create a function to check if string passed has leading zeroes
  // function leadingZero (str) {
  //   let leadingZeroStr;

  //   if (Number(newStr).toString() !== newStr) {
  //     leadingZeroStr = newStr;
  //   }

  //   return leadingZeroStr;
  // }

  // let leadingZeroStr = leadingZero();

  // * since item is passed in as a string, numbers will be coerced to that type value. use regex to find if string contains nums
  function hasNumbers(t) {
    let regex = /\d/g;
    return regex.test(t);
  } 

    // * with ES6, use destructuring and slice to obtain last item in the newStr arr
    const [lastItem] = newStr.slice(-1);
    console.log('last element:', lastItem);


    // * call regex / hasNumbers function to check if str has numbers
    hasNumbers(lastItem);
    //leadingZero(newStr);
    
    //console.log('leading zero str:', leadingZeroStr);
    
    // to check if the lastItem aka the str passed is empty
    // console.log('last item found is a #', lastItem);

  // * loop through the string with .split() and convert to lowercase
    let output; 
    // if last item is not a number, add counter ++ aka 1,2,3...
    if(hasNumbers(lastItem) === true && lastItem !== '0' && lastItem !== '9') {
      counter = lastItem;
      counter ++;
      console.log('yay increase counter:', counter);
      console.log('last el in if:', lastItem)
      newStr.pop();
      newStr.push(counter);
      console.log('newStr in the if:', newStr);

      output = newStr.join('');
      console.log('newstring:', output);
      // console.log(output + counter);
      return output;
    } else if (hasNumbers(lastItem) === false) {
      counter ++;
      output = newStr.join('');
      output = output + counter;
      return output;
    } else if (lastItem === undefined) {
      return 1;
    } else if
    
    return output;
    // for(let i = 0; i < leadingZeroStr.length; i += 1) {
    //   console.log('gotem in the loop', gotem);
    // }
}

// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// function incrementString(str) {
//   var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var numbers = "0123456789";
//   var lastChar = str[str.length-1];
//   var newStr = "";
  
//   //Case if no numbers in string
//   if (letters.indexOf(lastChar) > -1) {
//     newStr = str + "1";
//   } else {
//     var numStr = "";
//     var zeroes = "";
//     for (var i = 0; i < str.length; i++) {
//     //add all letters into new string
//       if (letters.indexOf(str[i]) > -1) {
//         newStr += str[i];
//       //preserve leading zeroes in a separate string
//       } else if (i < str.length-1 && str[i] === "0") {
//         console.log("FOUND ONE");
//         if (i === 0 || str[i-1] === "0" || letters.indexOf(str[i-1]) > -1) {
//           zeroes += "0";
//         }
//       //third string holds number
//       } else if (numbers.indexOf(str[i] > 0)) {
//         numStr += str[i];
//       }
//     }
//     var finalNumStr = ((parseInt(numStr) + 1).toString());
//     //takes away a 0 if the addition results in a longer digit
//     if (finalNumStr.length > numStr.length) {
//       zeroes = zeroes.slice(0, zeroes.length-1);
//     }
//     //adds all strings together
//     newStr = newStr + zeroes + finalNumStr;
//   }
//   return newStr;
// }

// incrementString("0059")

// test cases!

console.log(incrementString("foobar000")) // "foobar001");
// console.log(incrementString("foo")) // "foo1"); // --> pass
// console.log(incrementString("foobar001")) // "foobar002"); // --> pass
// console.log(incrementString("foobar99")) // "foobar100");
// console.log(incrementString("foobar099")) //"foobar100");
// console.log(incrementString("")) // "1"); // --> pass