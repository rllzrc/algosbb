// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Random Pick with Weight ! }

// T A S K !!!
// Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

// Note:

// 1 <= w.length <= 10000
// 1 <= w[i] <= 10^5
// pickIndex will be called at most 10000 times.

// * first attempt:
/**
 * @param {number[]} w
 */
var Solution = function(w) {
  // 
  this.weights = new Map();
  this.sum = 0;
  for(let i = 0; i < w.length; i += 1) {
    this.sum += w[i];
    this.weights.set(this.sum, i);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  let i = Math.floor(Math.random() * this.sum);
  for(let key of this.weights.keys()) {
    if(i < key) return this.weights.get(key);
  }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
//

