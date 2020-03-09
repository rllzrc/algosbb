/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  const results = [];
  
  const generate = (str, l, r) => {
	// if there are no remaining closing parens left
    if (r === 0) {
      results.push(str);
      return;
    }
    
	// if there are any open parens remaining
    if (l > 0)
      generate(str + '(', l - 1, r);
    
	// if the number of open parens left is less than the number of closing parens left
    if (l < r)
      generate(str + ')', l, r - 1);
  };
  
  generate('', n, n);
  return results;
}
