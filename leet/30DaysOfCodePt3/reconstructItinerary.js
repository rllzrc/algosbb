// ** Day 28 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Reconstruct Itinerary ! }

// T A S K !!
// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

// Note:

//     If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
//     All airports are represented by three capital letters (IATA code).
//     You may assume all tickets form at least one valid itinerary.
//     One must use all the tickets once and only once.

// * first attempt:
const findItinerary = tickets => {
  const map = {};
  const res = [];
  for(var i=0; i<tickets.length; i++) {
      var dep = tickets[i][0];
      var des = tickets[i][1];
      if(map[dep]) {
          map[dep].push(des);
      } else {
          map[dep] = [des];
      }
  }
  for(let loc in map) {
      map[loc].sort();
  }  
  var dfs = function(node) {
      var des = map[node];
      while(des && des.length>0) {
          dfs(des.shift());
      }
      res.push(node);
  }
  dfs('JFK');
  return res.reverse();

}

// * test cases!!
console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]])); // -> ["JFK", "MUC", "LHR", "SFO", "SJC"]
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])); // -> ["JFK","ATL","JFK","SFO","ATL","SFO"]