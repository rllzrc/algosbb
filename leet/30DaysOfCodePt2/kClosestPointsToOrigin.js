// ** Day 15 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> {  K Closest Points to Origin !! }

// T A S K !!!
// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

// * first attempt:
// kth largest in element in array -> similar vibes here
// max heap DS make sure its always k size
// max heap = parent node values are greater than those of their children
// anytime you need to store or look up data that must maintain order, consider heaps as they are v useful and efficient for that
const kClosest = (points, k) => {

}

// * test cases !!! ~
console.log(kClosest(points = [[1,3],[-2,2]], K = 1)); // -> [[-2, 2]]
console.log(kClosest(points = [[3,3],[5,-1],[-2,4]], K = 2)); // -> [[3,3],[-2,4]] or [[-2,4], [3,3]];