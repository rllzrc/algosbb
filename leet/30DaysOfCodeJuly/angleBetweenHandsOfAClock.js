// ** Day 14 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Angle Between Hands of a Clock ! }

// T A S K !!
// Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

// 30 degrees/hr - 360/12 
// 6 degrees/min - 360/60
// total hour = (hour + min/60) * 30
// total mins = minute * 6
// angle = (h - m) absolute value
// * first attempt!
// time complexity:
// * O(n)
const angleClock = (hour, minutes) => {
  // create a variable to keep track of hour angle
  let h = (hour % 12 + minutes/60) * 30; // 360/12
  let m = minutes * 6; // 360/60
  // to get the angle take absolute value of hour - min
  let angle = Math.abs(h - m);
  // check condition, if more than 180 do 360 - angle
  // return the smaller one from alpha angle
  if(angle > 180) {
    angle = 360 - angle;
  }
  return angle;
}

// * test cases!!
console.log(angleClock(hour = 12, minutes = 30)); // -> 165
console.log(angleClock(hour = 3, minutes = 30)); // -> 75
console.log(angleClock(hour = 3, minutes = 15)); // -> 7.5
console.log(angleClock(hour = 4, minutes = 50)); // -> 155
console.log(angleClock(hour = 12, minutes = 0)); // -> 0 