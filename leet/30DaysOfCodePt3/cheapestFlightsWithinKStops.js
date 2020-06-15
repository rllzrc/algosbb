// ** Day 14 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Cheapest Flights Within K Stops ! }

// T A S K !!
// There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

// Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

// * first attempt: BFS
// input arr = city, arrives, price
// k and price -> must watch out
// use dictionary to lookup prices between neighbors
// initially price will be set to infinity
// another dictionary to store city: arrives, price (locations)

const findCheapestPrice = (n, flights, src, dst, k) => {
  // quick edge case check:
  if(n === 1 || src === dst) return 0;

  // create a dictionary to store values
  let dictionary = new Map();
  // create an adjacent list 
  let destinationPrice = new Array(n).fill(Infinity); 

  //console.log(dictionary, destinationPrice);

  // add src, dst, and price values from arr to dictionary 
  for(value of flights) {
    // use destructuring 
    const [source, dest, price ] = value;

    dictionary.set(source, (dictionary.get(source) || new Set()).add([dest, price]));
  }

  // create queue DS
  let queue = [];

  // fill in values into queue
  queue.push([src, 0]);
  queue.unshift(['*', '*']);

  // iterate through while queue has values and K is not greater than or equal to - 1
  while(queue.length > 0 && k >= -1) {
    const [node, price] = queue.pop();

    if(node === '*') {
      // reassign values
      k -= 1;
      // check queue's length; insert values to beginning of arr
      if(queue.length > 0) {
        queue.unshift(['*', '*']);
      }
    } else {
      if(destinationPrice[node] > price) {
        destinationPrice[node] = price;

        if(dictionary.has(node)) {
          // loop through neighbor nodes
          for(let neighbors of dictionary.get(node)) {
            // destructuring to grab values
            const [dest, destPrice] = neighbors;

            queue.unshift([dest, price + destPrice]);
          }
        }
      }
    }
  }

  console.log(dictionary);
  console.log(destinationPrice);
  console.log(queue);
  // ternary to return out value
  // if destinationPrice dst still = Infinity; return -1  
  // else return out updated dst value
  return destinationPrice[dst] === Infinity ? - 1 : destinationPrice[dst];
}

// * test cases!!
console.log(findCheapestPrice(n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1)); // -> 200
console.log(findCheapestPrice(n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0)); // -> 500