// ** Day 23 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Stream of Characters !!! }

// T A SK !!!

// Implement the StreamChecker class as follows:

//     StreamChecker(words): Constructor, init the data structure with the given words.
//     query(letter): returns true if and only if for some k >= 1, the last k characters queried (in order from oldest to newest, including this letter just queried) spell one of the words in the given list.


// * first attempt: use DP
class TrieNode {
  constructor(value){
      this.value = value;
      this.children = {};
      this.end = false;
  }
}

class Trie {
  constructor(){
      this.root = new TrieNode("*");
  }

  addWord(word){

      let lastNode = this.root;

      for(let i=0; i < word.length; i++){
          let char = word[i];
          if(lastNode.children[char] === undefined){
              lastNode.children[char] = new TrieNode(char);
          }
          lastNode = lastNode.children[char];
          if(i == word.length - 1) lastNode.end = true;

      }
  }

  hasWord(word){ 
      let lastNode = this.root;
      for(let i = 0; i < word.length; i++){
          let char = word[i];
          if(lastNode.children[char] === undefined){
              return false //returns false if the word is not in the trie
          }
          else{
              lastNode = lastNode.children[char];
          }
          
          if(i == word.length - 1 && lastNode.end){ //true if has the word
              return true;
          }
          else if (i == word.length - 1){ //return lastNode if a word matches partially
              return lastNode
          }
      }
      
      return false;

  }
}

class StreamChecker{
  constructor(words){
      this.trie = new Trie();
      this.letters = [];
      
      for(let word of words){
          let reversedWord = word.split('').reverse().join('')
          this.trie.addWord(reversedWord);
      }
  }
  
  query(letter){
      this.letters.unshift(letter);
      let possibleWord = ""
      for(let letter of this.letters){
          possibleWord = possibleWord + letter;
          let trieWord = this.trie.hasWord(possibleWord);
          if(trieWord === true) return true;
          if(trieWord === false) return false;
      }
  
      return false;
      
  }
}


