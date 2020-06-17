// ** Day 11 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Validate IP Address ! }

// T A S K !!
// Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.

// IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;

// Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.

// IPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (":"). For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).

// However, we don't replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.

// Besides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.

// Note: You may assume there is no extra space or special characters in the input string.

// * first attempt: divide and conquer approach ~

// both addresses are composed of several substrings separated by a delimiter; each of the substrings is of the same format
// break down the addresses into chunks, verify them one by one 
// address is VALID if AND ONLY IF each of the chunks are valid

// for the IPv4 address: split IP into four chunks by the delimiter -> .
// for IPv6: split into 8 chunks by delimiter -> :

// for each substring of IPv4: check if integer is in between 0 - 255 and that there are no leading zeroes

// for each substring of IPv6: check if it is a hexadecimal of length 1-4

// time complexity:
// * O(n) -> linear, must parse through entire input string
// space complexity:
// * O(1) -> constant
const validIPAddress = IP => {
  // quick edge case check, run helper functions to determine valid IP
  if(isIPv4(IP)) {
    return 'IPv4';
  } else if(isIPv6(IP)) {
    return 'IPv6'
  } else {
    return 'Neither';
  }
};

// helper function to check for IPv4
// the every() method tests whether all elements in the arr pass the test implemented by the provided function -> returns a boolean
const isIPv4 = ip => {
  // split ip string and store it in a variable
  const nums = ip.split('.');

  // use every() to check condition of each group in nums array
  return (
    nums.length === 4 && 
    nums.every(group => {
      // create a varibale to check conditions
      // length / no leading zeroes / is within range 0 - 255 
      const isInvalidLength = group.length === 0 || group.length > 4;
      const isInvalidLeadingZeroes = group[0] === '0' && group.length !== 1;
      const isInvalidNumber = group < 0 || group > 255;

      // check boolean return value from every condition
      if(isInvalidLength || isInvalidLeadingZeroes || isInvalidNumber) {
        return false;
      }

      // loop through each subset arr or group, make sure it is only 9 digits long separated by delimiter, use is9Digits to check range 0 - 255
      for(let i = 0; i < group.length; i += 1) {
        // create a variable to hold on to current element
        const code = group[i];
        const is9Digits = code >= 0 && code <= 9;

        if(!is9Digits) {
          // if it doesnt pass the above condition, not a valid IPv4
          return false;
        }
      }

      return true;
    })
  );
}

// helper function to check if valid IPv6:
const isIPv6 = ip => {
  // split ip into delimiter groups
  const nums = ip.split(':');

  return (
    nums.length === 8 && nums.every(group => {
      // create a variable to check IPv6 conditions: 
      // valid length && use regex to check if it is a valid number (hexadecimal and length of 4)
      const isValidLength = group.length === 0 || group.length > 4;
      const isNotAHexadecimalNum = Number.isNaN(Number(`0x${group}`));

      // check boolean return value from every method:
      if(isValidLength || isNotAHexadecimalNum) {
        return false;
      }

      // loop thorugh each subset group based on delimiter and check 
      for(let i = 0; i < group.length; i += 1) {
        // create a variable to store current element
        const code = group[i];
        // conditional check variables:
        // make sure it is only 9 subsets long
        const isNum = code >= 0 && code <= 9;
        const isUpperCase = code >= 'A' && code <= 'f';
        const isLowerCase = code >= 'a' && code <= 'f';

        if(!isNum && !isUpperCase && !isLowerCase) {
          return false;
        }
      }
      
      return true;
    })
  );
}

// * test cases!!
console.log(validIPAddress("172.16.254.1")); // -> true -> This is a valid IPv4 address, return "IPv4"
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334")); // -> true -> This is a valid IPv4 address, return "IPv6"
console.log(validIPAddress("256.256.256.256")); // -> false -> This is neither a IPv4 address nor a IPv6 address. Return "Neither".