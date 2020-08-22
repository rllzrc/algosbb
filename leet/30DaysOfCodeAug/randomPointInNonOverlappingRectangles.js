// ** Day 22 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Random Point in Non-overlapping Rectangles!!! }

// T A SK !!!

// Given a list of non-overlapping axis-aligned rectangles rects, write a function pick which randomly and uniformily picks an integer point in the space covered by the rectangles.

// Note:

//     An integer point is a point that has integer coordinates. 
//     A point on the perimeter of a rectangle is included in the space covered by the rectangles. 
//     ith rectangle = rects[i] = [x1,y1,x2,y2], where [x1, y1] are the integer coordinates of the bottom-left corner, and [x2, y2] are the integer coordinates of the top-right corner.
//     length and width of each rectangle does not exceed 2000.
//     1 <= rects.length <= 100
//     pick return a point as an array of integer coordinates [p_x, p_y]
//     pick is called at most 10000 times.

// * first attempt: use DP

var Solution = function(rects) {
  this.rects = rects;
  this.map = {};
  this.sum = 0;
  // we put in the map the number of points that belong to each rect
  for(let i in rects) {
      const rect = rects[i];
      // the number of points can be picked in this rectangle
      this.sum += (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
      this.map[this.sum] = i;
  }
  this.keys = Object.keys(this.map);
};

/**
* @return {number[]}
*/
Solution.prototype.pick = function() {
  // random point pick between [1, this.sum]
  const randomPointPick = Math.floor(Math.random() * this.sum) + 1;
  
  // we look for the randomPointPick in the keys of the map
  let pointInMap;
  // the keys exists in map
  if(this.map[randomPointPick]) pointInMap = randomPointPick;
  // the key is the first in the map (we do this check before doing binary search because its out of boundery)
  else if(randomPointPick < this.keys[0]) pointInMap = this.keys[0];
  let high = this.keys.length;
  let low = 1;
  // binary search to find the closest key that bigger than randomPointPick
  while(low <= high && !pointInMap) {
      const mid = Math.floor((low + (high-low)/2));
      if(randomPointPick > this.keys[mid-1] && randomPointPick < this.keys[mid]) {
          pointInMap = this.keys[mid];
          break;
      } else if (randomPointPick > this.keys[mid]){
          low = mid+1;
      } else {
          high = mid-1;
      }
  }
  
  // we have the point, now we can get which rect belong to that point
  const pointInRects = this.map[pointInMap];
  const chosen = this.rects[pointInRects];
  const rightX = chosen[2];
  const leftX = chosen[0];
  const topY = chosen[3];
  const bottomY = chosen[1];
  const pickX = Math.floor(Math.random() * (rightX-leftX+1)) + leftX;
  const pickY = Math.floor(Math.random() * (topY-bottomY+1)) + bottomY;
  return [pickX, pickY]
};

// * test cases!!
console.log(sortArrayByParity([3,1,2,4])); // -> [2,4,3,1]
// [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
