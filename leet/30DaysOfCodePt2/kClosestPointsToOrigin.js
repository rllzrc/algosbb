// ** Day 15 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> {  K Closest Points to Origin !! }

// T A S K !!!
// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.) --> aka x2 + y2 and the square root of that

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

// * roadmap:
// kth largest in element in array -> similar vibes here
// max heap DS make sure its always k size
// max heap = parent node values are greater than those of their children
// anytime you need to store or look up data that must maintain order, consider heaps as they are v useful and efficient for that

// * first attempt: sorting 
// square root (x2-x1) + (y2-y1) to find distance from origin
// sort sq root values 
// return elemet before kth index
const kClosest = (points, k) => {
  // sort out points based on sq root values in ascending order
  points.sort((a, b) => {
    return (
      Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2)) - Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2))
    );
  });
  
  // create a new result arr
  let result = [];
  // iterate through up until K value
  for(let i = 0; i < k; i += 1) {
    // push in points up until K amount since it is already sorted, it will give us the Kth closest distances
    result.push(points[i]);
  }
  return result;
}

// * test cases !!! ~
console.log(kClosest(points = [[1,3],[-2,2]], K = 1)); // -> [[-2, 2]]
console.log(kClosest(points = [[3,3],[5,-1],[-2,4]], K = 2)); // -> [[3,3],[-2,4]] or [[-2,4], [3,3]];