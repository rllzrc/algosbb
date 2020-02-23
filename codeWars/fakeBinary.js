// given a string of digits, replace any digit below 5 with 0 and any digit above 5 with 1. Return the result as a new string.

const fakeBin = str => {
  // create a new var to store new result string
  let result = '';
  // iterate through the string of digits
  for(let i = 0; i < str.length; i ++) {
    // replace any digit below 5 with 0 
    //console.log('current digit in strig:', str[i]);
    if(str[i] < 5) {
      result += '0';
    } else {
      if(str[i] >= 5) {
        result += '1'
      }
    }
  }
  return result;
}


// test cases
console.log(fakeBin('45385593107843568')); // ---> '01011110001100111'
console.log(fakeBin('509321967506747')); // ---> '101000111101101'
console.log(fakeBin('366058562030849490134388085')); // ----> '011011110000101010000011011'