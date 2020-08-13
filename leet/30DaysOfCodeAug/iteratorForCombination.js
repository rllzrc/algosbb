// ** Day 13 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Iterator for Combination !!! }

// Design an Iterator class, which has:

//     A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
//     A function next() that returns the next combination of length combinationLength in lexicographical order.
//     A function hasNext() that returns True if and only if there exists a next combination.

// * first attempt:
const CombinationIterator = function(chars, comboLength) {
  this.combos = [];
  backtrack(this.combos, chars, comboLength, '', 0);
  this.index = 0;
}

CombinationIterator.prototype.next = function() {
  return this.combo[this.index += 1];
};

CombinationIterator.prototype.hasNext = function() {
  return this.index < this.comboLength;
};

function backtrack(combos, chars, max, combination, i) {
  if(combos.length === max) {
    combos.push(combination);
    return;
  } 

  if(i === chars.length) {
    return;
  }

  backtrack(combos, chars, max, combination + chars.charAt(i), i + 1);
  backtrack(combos, chars, max, combination, i + 1);
};