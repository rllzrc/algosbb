// * Put Your Reps In ~ BB Challenges!!!
// ** --> { Valid Anagram !!! }

// T A S K !!
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// * first attempt: use sorting
const isAnagram = (s, t) => {
  // quick edge case check, if lengths dont match then no need to do anymore work!
  if(s.length !== t.length) {
    return false;
  }

  // convert strings into an array using split, sort alphabetically and then combine into a string with join method
  const str1 = s.split('').sort().join('');
  const str2 = t.split('').sort().join('');
  //console.log(str1, str2);
  return str1 === str2;
}

// * test cases!!
console.log(isAnagram(s = "anagram", t = "nagaram")); // -> true
console.log(isAnagram(s = "rat", t = "car")); // -> false