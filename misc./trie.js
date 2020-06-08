/*
Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

Example: 

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]

Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]

Constraints:

1 <= products.length <= 1000
There are no repeated elements in products.
1 <= Σ products[i].length <= 2 * 10^4
All characters of products[i] are lower-case English letters.
1 <= searchWord.length <= 1000
All characters of searchWord are lower-case English letters.


*** 

// create a trie
// salvar palabras en trie
// por palabra que me des voy a devolver todas las posible palabras en el trie q match prefix

//

// mouse

        m
      /
     o       

*/

/*
                   m
                  / \                 
                 o  { u , suggested: [ ] }
                /     \
               b       s
                        \
                         e  , '*' 
                          \
                           p
                            \
                             a
                              \
                               d
*/ 

const products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
                   

      
  

const Trie = function() {
  this.store = { a : { b : 2  }}
}                                 
                                
Trie.prototype.add = function (word){
let store = this.store

for (const char of word) {
  if (!store[char]) {
    store[char] = {}
    store['sug'] = []
    }
    store['sug'].push(word)
    store = store[char]
  }
  store['sug'] = [word]
  store['*'] = {}
}

Trie.prototype.search = function(word){
  let store = this.store
  
  for(const char of word) {
    if (store[char]) return word
    if (!store[char]) return false
    store = store[char]
  }
  
}

// Trie.prototype.recommend = function(prefix) {
//   let store = this.store
//   for (const char of prefix) {
//     if (!store[char]) return []
//     else store = store[char]
//   } 
//   return store['sug']
// }


// const recommendWords = (words, prefix) => {
//    words = words.sort()
//    const trie = new Trie()
//    for (const word of words) {
//       trie.add(word) 
//    }
//   console.log(trie.store)
//   return trie.recommend(prefix)
// }


const trie = new Trie()
trie.add('hello')
console.log(trie.store)
console.log(trie.search('hello'))

//console.log(recommendWords(products, searchWord))
























