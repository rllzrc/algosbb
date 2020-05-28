// * Put your reps in!! -> Minimize the Sum

// * why not because its Avatar themed!
// Kokka and Satara are playing a game. In this game, Kokka gives Satara a number  and  pairs of integers, the  of which is . Kokka wants Satara to create an array  with length  such that for each  (), . He also wants Satara to minimize the sum

// minimize the vertical movement you have to do jumping from range to range
// you've got hella paths to take but we want the minimum amount of steps from each range
// absolute value of the difference between each of the adjacent values
// 3 3 6 2 2 
//  0 3 4 0 (difference between jumps) --> 7

// any overlapping ranges? stay in the intersection part
// no overlaps? take the values closest to each other in non intersecting adjacent ranges

// keep track of range of first element
// check if new range is above or below it
// choose lowest value and take the difference to running sum

const minimumSum = (l, r) => {
  // instantiate low and high variables to keep track of at first the beginning values of both ranges
  let low = l[0]; // a
  let high = r[0]; // b
  
  // create a counter variable to sum up all the ranges between each jump
  let counter = 0;

  // i terate through the first range
  for(let i = 1; i < l.length; i += 1) {
    // create two variables to keep track of the values of the lower/upper parts of the range for clarity when comparing later
    let localLow = l[i]; // c
    let localHigh = r[i]; // d

    // check to see if there are any intersections by comparing the lower end of new range with top end of current range
    if(localLow > high) {
      // if so, no intersection, add the jump to counter -- aka the come up!
      result += localLow - high;
      // reassign values to be lowlow since we've made the jump
      low = localLow;
      high = localLow;
    } else if(localHigh < low) {
      // same check to see if the upper end of new range is lower than lower end of current range -- aka the jump down
      result += low - localHigh;
      // reassing values again since we made the jump; reset the ranges 
      low = localHigh;
      high = localHigh;
    } else {
      // if both arent met; means we got an intersection!!
      // narrow it down
      if(localLow > low) {
        low = localLow;
      }

      if(localHigh < high) {
        high = localHigh;
      }
    }
  }
  return counter;
}