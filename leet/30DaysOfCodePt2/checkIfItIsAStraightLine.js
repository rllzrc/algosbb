// ** Day 8 of 30 Days of Code Challenge Part ii -- May Edition! --> { Check If It Is A Straight Line ! }

// TASK !!!
// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// * HINTS
// If there're only 2 points, return true.
// Check if all other points lie on the line defined by the first 2 points.
// Use cross product to check collinearity.

// * first attempt:

// match slope between points and see if they are the same
// y2-y1/x2-x1 is slope calculation --> 2c true
// more than two? check the other proceeding coordinates and if the slope1 = slope2 return true, else false
// 2c --> return true, if more than two calculate the slope
const checkStraightLine1 = coordinates => {
  // quick edge case check if length of coordinates = 2, return true, meaning only 2 points so must be a straight line
  if(coordinates.length === 2) {
    return true;
  }

  // create two variables for x and y values
  let x0 = coordinates[0][0];
  let y0 = coordinates[0][1];
  let x1 = coordinates[1][0];
  let y1 = coordinates[1][1];

  // console.log('x0:', x0);
  // console.log('y0:', y0);
  // console.log('x1:', x1);
  // console.log('y1:', y1);
  

  for(let i = 0; i < coordinates.length; i += 1) {
    // create two new variables to hold on to x and y values 
    let x = parseInt(coordinates[i], 10);
    let y = parseInt(coordinates[i], 10);
    console.log('x', x);
    console.log('y', y);

    // check coordinate slope, if slope 1 doesn't equal slope 2, return false
    if((y1 - y0) * (x - x0) !== (y - y0) * (x1 - x0)) {
      console.log(y1-y0 * x - x0);
      console.log((y - y0) * (x1 - x0));
      return false
    }
    
    x += 1;
    y += 1;
  }

  return true;
}

// * second attempt:

// a bit cleaner and easier to understand
// so we declare our x1 and y1 coordiantes off the bat, basically its the 0th element of coordinates array
// declare two slope varaibles --> again definition of a slope is y2-y2 / x2-x1 and if they are all the same, we got a straight line
// if not, return false 

// runtime complexity:
// * O(n) --> linear, one loop seeing each element once
const checkStraightLine = coordinates => {
  // quick edge case check
  if(coordinates.length === 2) return true;

  // declare x and y points
  let x1 = coordinates[0][0];
  let y1 = coordinates[0][1];

  // create a variable for slope1
  let slope1 = null;

  // iterate through the coordinates array 
  for(let i = 1; i < coordinates.length; i += 1) {

    //console.log('x1', x1)
    //console.log('y1', y1)
    
    // declare second set of x and y points
    let x2 = coordinates[i][0];
    let y2 = coordinates[i][1];
    
    //console.log('x2', x2)
    //console.log('y2', y2)
    //console.log('i', i);
    // check if x2-x1 = 0, no slope, no line
    //console.log(x2, x1);
    if(x2 - x1 === 0) return false;

    if(slope1 === null) {
      // reassign slope values
      slope1 = (y2 - y1) / (x2 - x1);
    }

    // create a new variable to keep track of slope 2 value
    let slope2 = (y2 - y1) / (x2 - x1);

    //console.log('slope1', slope1);
    //console.log('slope2', slope2);
    // if the slopes are not the same, then no straight line, return false
    if(slope2 !== slope1) {
      return false;
    }
  }

  return true;
}

//* test cases!!
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])); // --> true
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])); // --> false
