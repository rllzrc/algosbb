// * Task --> dictionaries and maps day 8 of 30 days of code challenge !

// Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

function processData(input) {
  //Enter your code here
  let inputArr = input.split('\n');
  let n = parseInt(inputArr[0]);
  let searchSize = inputArr.length - parseInt(n);
  let phoneBook = {};
  
  for(let i = 1; i <= n; i += 1){
      let info = inputArr[i].split(' ');
      phoneBook[info[0]] = info[1];
  }
  
  for(let k = 1; k < searchSize; k += 1){
      let name = inputArr[k + n];
      if(phoneBook.hasOwnProperty(name)){
          console.log(name + '=' + phoneBook[name]);  
      } else {
          console.log('Not found');
      }
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});

