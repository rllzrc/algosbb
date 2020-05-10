// ** Day 10 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Find the Town Judge ! }

// T A S K !!!!
// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

// * NOTES:

// edge case if length of trust is less than n - 1; return true
// have two pointer values; in and out --> increase in values if n trusts another number and vice versa
// if out = n-1 people; return that index

// or have one array of length n + 1; increase value if someone trusts decrease if that num trutsts another
// whichever index is positive; then that is the town judge

// * first attempt:
// runtime complexity:
// * O(n) -> linear time
const findJudge = (N, trust) => {
  // quick edge case check 
  if(trust.length < N - 1) {
    return - 1; 
  }

  // create a count array variable like a charmap
  // keep track of trusts values and then check whichever is N-1 is the judge
  const counts = new Array(N + 1).fill(0);
  
  // loop through the amount of people -> N values
  for(let [i, k] of trust) {
    // if the person trusts somebody then decrement the value in the counts array 
    counts[i] -= 1;
    
    // tally up the amoutn of trusts
    counts[k] += 1;
  }
  
  //console.log(counts);
  // if N-1 exists, then we found the judge since they don't trust anyone except themselves! --> and everyone else does ~
  for(let i = 1; i < counts.length; i += 1) {
    if((N-1) === counts[i]) {
      return i;
    }
  }

  return -1;
}

console.log(findJudge(2, [[1,2]])); // -> 2
console.log(findJudge(3, [[1,3],[2,3]])); // -> 3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])); // -> -1
console.log(findJudge(3, [[1,2],[2,3]])); // -> -1
console.log(findJudge(4,  [[1,3],[1,4],[2,3],[2,4],[4,3]])); // -> 3