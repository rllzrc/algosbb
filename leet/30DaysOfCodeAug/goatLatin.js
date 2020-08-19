// ** Day 18 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Goat Latin !!! }

// T A SK !!!

// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

//     If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
//     For example, the word 'apple' becomes 'applema'.

//     If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
//     For example, the word "goat" becomes "oatgma".

//     Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//     For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.

// Return the final sentence representing the conversion from S to Goat Latin. 

// * first attempt: use DP
const toGoatLatin = (S) => {
  let words = S.split(" ")
  words.forEach(function(value , i){
      if (!(["a", "e", "i", "o", "u","A","E","I","O","U"].includes(value[0]))){
          words[i] = words[i].substr(1,words[i].length - 1) + words[i].substr(0,1)
      }
      words[i] = words[i] + "ma" + "a".repeat(i + 1)
  })
  
  return words.join(" ")
};

// * test cases!!
console.log(numsSameConsecDiff("I speak Goat Latin")); // -> "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(numsSameConsecDiff("The quick brown fox jumped over the lazy dog")); // -> "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"