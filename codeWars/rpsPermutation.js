// * rock paper scissors permutation! 
​
//For example:
​
// rps(0) -> ['']
// rps(1) -> ['r', 'p', 's']
// rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
// rps(3) -> [
//   'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
//   'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
//   'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
// ]
​
// The strings must be returned in the order suggested above.
​
const rps = (n) => {

  // * create a variable to define terms
  const turns = ['r', 'p', 's'];

  // * create a variable to store results 
  const result = [];
​
  // * if no number passed, return empty array 
  if (n === 0) return [''];
​
  const generate = (string) => {
    // base case: if length of string is n, add it to results
    if (string.length === n) {
      result.push(string);
      return;
    }
    // iterate over turns and call generate on string + each character
    for (let i = 0; i < turns.length; i++) {
      generate(string + turns[i]);
    }
  };
​
  // initiate / invoke recursion
  generate('');
​
  // once recursion complete, return results
  
  return result;
}

// * test cases!!

console.log(rps(0));
console.log(rps(1));
// console.log(rps(2));
// console.log(rps(3));