// * create a function is Palindrome


const isPalindrome = str => {
  // iterate through string
  // divide str in half and 'have pointers' checking from front to back
  for(let i = 0; i < str.length/2; i++){
    // check if first element is === to last
    // use charAt with strings, cehck if not equal to make it easier
    if(str.charAt(i) !== str.charAt([str.length-1-i])) {
      return false;
    }
    return true;
  }
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('hotdog'));
