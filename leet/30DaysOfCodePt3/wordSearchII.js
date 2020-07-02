// ** Day 30 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Word Seach II ! }

// T A S K !!
// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// N O T E S ~
// You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?
// If the current candidate does not exist in all words' prefix, you could stop backtracking immediately. What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem: Implement Trie (Prefix Tree) first.

// * first attempt:
// refactor later

function findWords1(board, words) {
  let res = [];

  function buildTrie() {
    const root = {};
    for (let w of words) {
      let node = root;
      for (let c of w) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  }

  function search(node, i, j) {
    if (node.word != null) {
      res.push(node.word);
      node.word = null;   // make sure only print one time for each word
    }

    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
    if (node[board[i][j]] == null) return;

    const c = board[i][j];
    board[i][j] = '#';  // mark visited
    search(node[c], i + 1, j);
    search(node[c], i - 1, j);
    search(node[c], i, j + 1);
    search(node[c], i, j - 1);
    board[i][j] = c;  // reset
  }

  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  return res;
}

// * second attempt: backtracking with Trie
// build a Trie out of the words in the dictionary -- use for matching process later
// starting from each cell, initiate backtracking exploration - if there exists any word in the dictionary that starts with the letter in that cell 
// in recursive function call, explore the neighboring vells around the current cell for the next recursive call 
// at each call, check if the sequence of letters that we traverse so far matches any word in the dictionary with the help of Trie DS



// * test cases!!
console.log(findWords(board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
], words = ["oath","pea","eat","rain"])); // -> ["eat","oath"]
