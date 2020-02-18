
const solution = (transactions, taxRate) => {
  let numCalls = 0;
  let cache = {};

  const calculateCostAfterTax = (cost, taxRate) => {
	console.log('new cost', cost);
    numCalls = numCalls + 1;
	console.log('wtf', numCalls);
    return cost * taxRate;
  };

  const computeTotal = taxRate => {
    return cost => {
      return calculateCostAfterTax(cost, taxRate);
    };
  };

  transactions.forEach(function(e) {
	  if(e !== cache) {
		  cache[e] = e;
	  }
  });

  transactions = Object.keys(cache);
  transactions.map(computeTotal(taxRate));
  return numCalls;
};


let transactions = [10, 24, 12, 8, 10, 24]
let taxRate = 1.2;

console.log(solution(transactions, taxRate));