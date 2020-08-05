// ** Day 5 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Add and Search Word - Data Structure Design ! }

// T A S K !!

// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)

// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

class Node {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    function add(node, i) {
      if(i === word.length) return node.end = true;
      if(!node.children.has(word[i])) node.children.set(word[i], new Node());
      add(node.children.get(word[i], i + 1));
    }
    add(this.root, 0);
  }

  search(word) {
    function find(node, i) {
      if(i === word.length && node.end) return true;
            if(i === word.length) return false;
            
            if(word[i] === '.') {
                for(let [key, next] of node.children) {
                    if(find(next, i+1)) return true;
                }
                return false;
            }
            if(!node.children.has(word[i])) return false;
            return find(node.children.get(word[i]), i+1);
        }
        return find(this.root, 0);
    }
}
