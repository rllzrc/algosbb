// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Two City Scheduling ! }

// T A S K !!
// There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

// * first attempt:
// take the diff of cost of A to cost of B
// perform A - B sort in ascending order

const twoCitySchedCost = costs => {
  // sort out values in cost array A - B
  // this will ensure that result will stay at a minimum since we're sorting based on the differences
  const sortedCost = costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
  console.log(sortedCost);
  // create a result variable to keep track of
  let result = 0;

  // iterate through the cost arr
  for(let i = 0; i < costs.length; i += 1) {
    // so we can select the first half of the entire costs array
    // this way we are doing an even split between both citites
    if(i < costs.length / 2) {
      // add the cost from city A
      result += sortedCost[i][0];
    } else {
      // add the cost from city B
      result += sortedCost[i][1];
    }
  }

  // if using reduce:
  // const mid = costs.length / 2
  // reurn costs.reduce((acc, curr, i) => {
  //   if(i < mid) return acc + curr[0];
  //   else return acc + curr[1];
  // }, 0);

  return result;
}

// * test cases !!!
console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));// -> 110
console.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]));// -> 1859