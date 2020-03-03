// add hackhour challenge: balanced parens, return true if provided input is "balanced"

const balancedParens = input => {
  let parens = ['[', '(', '{', ']', ')', '}'];
  let newinput = "";
  for (let j = 0; j < input.length; j+=1) {
    if (parens.includes(input[j])) {
      newinput+=input[j];
    }
  }
  input = newinput;
  if (input[0] === ']' || input[0] === '}' || input[0] === ')' ) {
    return false;
  }
  let cache = []
  cache.push(input[0])
  for (let i = 1; i < input.length; i+=1) {
    // console.log(input[i]);
    if (input[i] === ']' && cache[0] == '[') {
      cache.shift()
    }
    else if (input[i] === '}' && cache[0] == '{') {
      cache.shift()
    }
    else if (input[i] === ')' && cache[0] == '(') {
      cache.shift()
    }
    else {cache.unshift(input[i])}
  }
  if (cache.length === 0) return true;
  return false;
};