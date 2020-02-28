// basically capitalize first letter of word!

const toJadenCase = str => {
    // to turn string into an array
    console.log('OG', str);
    let strArr = this.toLowerCase().split(' ');
    console.log('split arr:', strArr)
  
    // iterate through strArr
    for(let i = 0; i < strArr.length; i ++) {
      strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1)
    }
    return strArr.join(' '); 
};


// let jCased = [];
// let words = this.toLowerCase().split(' ');
// for(let i = 0; i < words.length; i++){
//   let word = words[i];
//   jCased.push(word[0].toUpperCase() + word.slice(1));
// }
// return jCased.join(' ');

// * test cases;

const str = "How can mirrors be real if our eyes aren't real"

const toJadenCase = str => {
  let 
}
console.log(toJadenCase(str));
//console.log(str);

// other solutions for optimization / elegance

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// return this.split(' ').map(capitalizeFirstLetter).join(' ');
// };

// return this.split(" ").map(function(word){
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }).join(" ");

// let jCased = [];
// let words = this.toLowerCase().split(' ');
// for(let i = 0; i < words.length; i++){
//   let word = words[i];
//   jCased.push(word[0].toUpperCase() + word.slice(1));
// }
// return jCased.join(' ');